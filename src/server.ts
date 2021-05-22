import chalk from "chalk";
import compression from "compression";
import cors from "cors";
import express, { Express } from "express";
import { readFile } from "fs/promises";
import http from "http";
import { resolve } from "path";
import { parse } from "yaml";
import getContext from "./getContext";

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
			app.all(`/api/${route}`, context.module.default);
			console.info("Added API context", chalk.cyan(route));

		});

	});

	// Add docs
	app.use("/insomnia.json", async (_req, res) => res.json(parse(await readFile(resolve("insomnia.yaml"), "utf8"))));
	app.use("/docs", express.static("docs"));

	// Start HTTP server
	http.createServer(app).listen(parseInt(process.env.PORT || "4000"));
	console.info("HTTP server running on", chalk.cyan(`:${process.env.PORT || 4000} (http)`));

}
