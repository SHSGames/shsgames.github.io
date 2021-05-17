import chalk from "chalk";
import compression from "compression";
import cors from "cors";
import express, { Express } from "express";
import http from "http";
import getContext, { Context } from "./getContext";

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
	contexts.map(function(context): Context {

		// Get path('s) from context
		const paths = typeof context.module.path === "string" ? [ context.module.path ] : context.module.path;

		// Add all paths to context
		paths.map(path => {

			// Register API context
			app.all(`/api/${path}`, context.module.default);
			console.info("Added API context", chalk.cyan(path));
			return null;

		});

		return context;

	});

	// Start HTTP server
	http.createServer(app).listen(parseInt(process.env.PORT || "4000"));
	console.info("HTTP server running on", chalk.cyan(`:${process.env.PORT || 4000} (http)`));

}
