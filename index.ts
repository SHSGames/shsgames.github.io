import chalk from "chalk";
import compression from "compression";
import cors from "cors";
import express, { Request, Response } from "express";
import fs from "fs/promises";
import http from "http";
import https from "https";
import path from "path";
import mysqlPromise from "mysql-promise";
import mysql from "mysql2";
import YAML from "yaml";
import dotenv from "dotenv";

// Configure environment variables
dotenv.config();

// Add methods to console
console.info = (...args) : void => { console.log(chalk.blue("[ INFO ] "), ...args); };
console.error = (...args) : void => { console.log(chalk.red("[ ERROR ]"), ...args); };
console.warn = (...args) : void => { console.log(chalk.yellow("[ WARN ] "), ...args); };

// Log errors to console instead of killing the application
process.on("uncaughtException", err => console.error(err));

// Get API function for internal use
(global as any).api = async function(endpoint: string, query: object = {}) : Promise<object> {
	return await (await require(`./api/${endpoint}.js`))({ query });
};

// Start server
(async function server(app) {

	// Get config from config.yml
	const config: any = YAML.parse(await fs.readFile("./config.yml", "utf8"));
	console.info("Parsed configuration from", chalk.cyan("config.yml"));

	// Load config into global scope
	(global as any).config = config;

	// If MySQL is used
	if(config.mysql.use) {

		// Get MySQL config
		const conf = config.mysql;
		delete conf.use;
		const db = mysqlPromise();

		try {

			// Try and log in
			db.configure(conf, mysql);
			(global as any).mysql = db;

			// Test connection
			await db.query(`show tables`);
			console.info("Logged into MySQL as", chalk.cyan(`${config.mysql.user}@${config.mysql.host}`));

		} catch (error) {

			// Clean up
			console.error("Could not log into MySQL as", chalk.cyan(`${config.mysql.user}@${config.mysql.host}`));
			console.error(error);

		}

	}

	// API parser middleware
	async function apiParser(req: Request, res: Response): Promise<void> {

		// Deconstruct request URL
		const pathname: string = req.originalUrl.split("?")[0];

		// Start timer
		const time: number = Date.now();

		// Log API request
		console.info("Received API request", chalk.yellow(req.method), chalk.cyan(pathname));

		// Set timer to make request time out
		setTimeout(function() {

			// Make sure that nothing was sent
			if(!res.headersSent) {

				// Respond with timeout code
				res.status(408);
				res.header("Content-Type", "application/json");

        		res.send(JSON.stringify({ success: false, status: `Request Timeout (${config["timeout-time"]}s)` }, null, 4));
				console.warn("API request to", chalk.cyan(pathname), "timed out after", chalk.cyan(`${Date.now() - time}ms`));

			}

		}, config["timeout-time"] * 1000);

		// Attempt to respond
		try {

			// Import endpoint
			const endpoint: Promise<object> = require(`./lib${pathname}.js`).default(req, res);

			// Execute endpoint in context of request
			endpoint.then((response: object) => {

				// Send OK status
				res.status(res.statusCode || 200);
				res.header("Content-Type", "application/json");

				// Respond to request
        		res.send(JSON.stringify({ success: true, ...response }, null, 4));

			}).catch((error: any) => {

				// Send error status
				res.status(res.statusCode || 400);
				res.header("Content-Type", "application/json");

				// Send error message
        		res.send(JSON.stringify({ success: false, status: "Request Rejected", error }, null, 4));

			}).finally(function() {

				// Log timings to console for debug
				console.info("API request to", chalk.cyan(pathname), "responded in", chalk.cyan(`${Date.now() - time}ms`));

			});

		} catch(error) {

			// If module not found
			if(error.toString().includes(pathname)) {

				// Send 404 error
				res.status(404);
				res.header("Content-Type", "application/json");
        		res.send(JSON.stringify({ success: false, status: "Not Found" }, null, 4));

			} else {

				// Send 500 error
				res.status(500);
				res.header("Content-Type", "application/json");
        		res.send(JSON.stringify({ success: false, status: "Internal Server Error" }, null, 4));

			}

			// Log error to console
			console.error("API request to", chalk.cyan(pathname), "failed in", chalk.cyan(`${Date.now() - time}ms`));
			console.error(error);

		}
	}

	// Allow requests from any origin
	app.use(cors());

	// Use body parser to parse fields
	app.use(express.json());

	// Listen and pass api
	app.use("/api/**", apiParser);

	// If the application is running in development mode
	if (process.env.NODE_ENV === "dev") {

		// Start HTTP server
		http.createServer(app).listen(4000);
		console.info("Development server running on", chalk.cyan(":4000 (http)"));

	}

	// If the application is running in production mode
	else {

		// Use gzip when serving files
		app.use(compression());

		// Redirect HTTP to HTTPS
		app.all("*", ({ secure, hostname, url }, res, next) => {
		  	if (config.ssl.use === false || config.ssl.redirect === false || secure) return next();
		  	else res.redirect(`https://${hostname}${url}`);
		});

		// Serve static files from the last built server
		app.use(express.static("public_html", { extensions: ["html"] }));

		// Catch 404's and send the index document - history-fallback-api
		app.get("*", (_request, response) => response.sendFile(path.resolve("public_html/index.html")));

		// Start HTTP server
		http.createServer(app).listen(process.env.PORT || config["port"]);
		console.info("Production server running on", chalk.cyan(`:${process.env.PORT || config["port"]} (http)`));

		// Start HTTPS server
		if(config.ssl.use === true) {
			(async function() {

				// Get certificates
				const cert = await fs.readFile(`${config.ssl["cert-root"]}/cert.pem`, "utf8");
				const key = await fs.readFile(`${config.ssl["cert-root"]}/privkey.pem`, "utf8");

				// Initialize HTTPS server
				https.createServer({ key, cert }, app).listen(config.ssl.port);
				console.info("SSL server running on", chalk.cyan(`:${config.ssl.port} (https)`));

			}());
		}

	}

}(express()));
