import asyncRequireContext from "async-require-context";
import chalk from "chalk";
import { Express } from "express";
import http from "http";
import config from "../app.config.json";

export default async function server(app: Express): Promise<void> {

	// Apply all middlewares
	const middlewares = await asyncRequireContext<Middleware>("./lib/src/middleware");
	middlewares.map(middleware => {
		app.use(middleware.module.default);
		console.info(chalk.magenta("MDW"), "Added middleware from", chalk.cyan(middleware.path));
	});

	// Apply all middlewares
	const runtimes = await asyncRequireContext<Runtime>("./lib/src/runtime");
	runtimes.map(runtime => {
		runtime.module.default(app);
		console.info(chalk.yellow("RNT"), "Added runtime from", chalk.cyan(runtime.path));
	});

	// Get all API endpoints and add them to the app context.
	const endpoints = await asyncRequireContext<APIEndpoint>("./lib/api");
	endpoints.map(function(endpoint) {
		const routes = typeof endpoint.module.route === "string" ? [ endpoint.module.route ] : endpoint.module.route;
		routes.map(route => app.all(`/api/${route}`, endpoint.module.default));
		console.info(chalk.greenBright("EDP"), "Added API endpoints from", chalk.cyan(endpoint.path));
	});

	// Get port to listen on (HTTP)
	const PORT = process.env.PORT || config.http.port;

	// Start HTTP server
	http.createServer(app).listen(PORT);
	console.info(chalk.redBright("SRV"), "HTTP server running on", chalk.cyan(`:${PORT} (http)`));

}
