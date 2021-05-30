import chalk from "chalk";
import compression from "compression";
import cors from "cors";
import express, { Express } from "express";
import http from "http";
import { resolve } from "path";
import { v1 as uuid } from "uuid";
import getContext from "./getContext";
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

				// Modify Response.json to pretty print if requested
				res.json = responseJson(req, res);

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
		res.header("Request-ID", requestId);

		// Modify Response.json to pretty print if requested
		res.json = responseJson(req, res);

		// Send error code
		res.status(404).json({
			error: true,
			code: 404,
			requestId,
			message: "Endpoint not found."
		});

	});

	// Add docs
	app.use("/insomnia.json", (_req, res) => res.sendFile(resolve("insomnia.json")));
	app.use("/docs", express.static("docs"));

	// Start HTTP server
	http.createServer(app).listen(parseInt(process.env.PORT || "4000"));
	console.info("HTTP server running on", chalk.cyan(`:${process.env.PORT || 4000} (http)`));

}
