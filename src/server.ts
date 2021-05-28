import chalk from "chalk";
import compression from "compression";
import cors from "cors";
import express, { Express } from "express";
import { readFile } from "fs/promises";
import http from "http";
import { resolve } from "path";
import { parse } from "yaml";
import getContext from "./getContext";
import { v1 as uuid } from "uuid";
import responseJson from "./responseJson";

// Run API server
export default async function server(app: Express): Promise<void> {

	// Allow requests from any origin
	app.use(cors());

	// Use body parser to parse fields
	app.use(express.json());

	// Use gzip when serving files
	app.use(compression());

	// Get all API endpoints and add them to the app context.
	const contexts = await getContext("./lib/api");
	contexts.map(function(context) {

		// Get route('s) from context
		const paths = typeof context.module.route === "string" ? [ context.module.route ] : context.module.route;

		// Add all paths to context
		paths.map(route => {

			// Register API context
			app.all(`/api/${route}`, (req, res) => {

				// Generate a unique ID for this request
				const requestId = uuid();
				res.header("RequestID", requestId);

				const timestamp = Date.now();

				// Log request on hit
				console.info("<-", chalk.cyan(`/api/${route}`), chalk.magenta(`(${req.method})`));

				// Modify Response.json to pretty print if requested
				res.json = responseJson(req, res);

				// Monitor endpoint for a response
				const completionCheck = setInterval(function() {

					// If the endpoint has not responded, cancel iteration
					if (!res.headersSent) return;

					// Calculate the total time the endpoint took to respond
					const duration = Date.now() - timestamp;

					// Log response to console
					console.info("->", chalk.cyan(`/api/${route}`), chalk.magenta(`(${req.method})`), chalk.greenBright(res.statusCode), chalk.yellowBright(`${duration}ms`));

					// Stop loop
					clearInterval(completionCheck);

				});

				// Queue request timeout in case the endpoint dosn't respond in time
				setTimeout(function() {

					// Make sure it didn;t respond
					if (res.headersSent) return;

					// Log timeout
					console.warn("API request timed out", chalk.magenta(`(${req.method})`), chalk.cyan(`/api/${route}`));

					// Send error message
					res.status(408).json({
						error: true,
						code: 408,
						requestId,
						message: "Request timed out."
					});

				}, parseInt(process.env.TIMEOUT || "30") * 1000);

				// Return endpoint module for execution
				return context.module.default(req, res);

			});

			// Log successful registration
			console.info("Added API context", chalk.cyan(route));

		});

	});

	// Catch 404's
	app.all("/api/**", (req, res) => {

		// Generate a unique ID for this request
		const requestId = uuid();
		res.header("RequestID", requestId);

		// Modify Response.json to pretty print if requested
		res.json = responseJson(req, res);

		// Send error code
		res.json({
			error: true,
			code: 404,
			requestId,
			message: "Endpoint not found."
		});

	});

	// Add docs
	app.use("/insomnia.json", async (_req, res) => res.json(parse(await readFile(resolve("insomnia.yaml"), "utf8"))));
	app.use("/docs", express.static("docs"));

	// Start HTTP server
	http.createServer(app).listen(parseInt(process.env.PORT || "4000"));
	console.info("HTTP server running on", chalk.cyan(`:${process.env.PORT || 4000} (http)`));

}
