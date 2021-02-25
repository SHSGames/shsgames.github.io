import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import { promises as fs } from "fs";
import http from "http";
import path from "path";
import YAML from "yaml";
import chalk from "chalk";
import url from "url";
import rateLimit from "express-rate-limit";
import mysql from "mysql2";
import mysqlPromise from "mysql-promise";

// Add methods to console
console.info = function(){ console.log(chalk.blue("[INFO]"), ...arguments) };
console.error = function(){ console.log(chalk.red("[ERROR]"), ...arguments) };
console.warn = function(){ console.log(chalk.yellow("[WARN]"), ...arguments) };
console.success = function(){ console.log(chalk.green("[SUCCESS]"), ...arguments) };

// Log errors to console instead of killing the application
process.on("uncaughtException", err => console.error(err));

// `require` Helper function
global.require = async path_to_module => (await import(path_to_module)).default;

// Get API function for internal use
global.api = async (endpoint, query = {}) => await (await require(`./api/${endpoint}.js`))({ query });

// Add back `__dirname` constant
global.__dirname = path.resolve(".");

// Start server
(async function server(app) {

	// Get config from config.yml
	global.config = YAML.parse(await fs.readFile("./config.yml", "utf8"));
	console.info("Parsed configuration from", chalk.cyan("config.yml"));

	// If MySQL is used
	if(config.mysql.use) {

		// Get MySQL config
		const conf = config.mysql;
		delete conf.use;
		const db = mysqlPromise();

		try {

			// Try and log in
			db.configure(conf, mysql);
			global.mysql = db;

			// Test connection
			await db.query(`show tables`)
			console.info("Logged into MySQL as", chalk.cyan(`${config.mysql.user}@${config.mysql.host}`));

		} catch (error) {

			// Clean up
			console.error("Could not log into MySQL as", chalk.cyan(`${config.mysql.user}@${config.mysql.host}`));
			console.error(error);

		}

	}

	// Configure rate limiting
	const limiter = rateLimit({
  		windowMs: config["rate-limit"]["window-time"] * 1000,
  		max: config["rate-limit"]["max-requests"]
	});

	// API parser middleware
	async function apiParser(req, res) {

		// Deconstruct request URL
		const { pathname } = url.parse(req.url);

		// Start timer
		const time = Date.now();

		// Log API request
		console.info("Received API request", chalk.cyan(pathname));

		// Set timer to make request time out
		setTimeout(function() {

			// Make sure that nothing was sent
			if(!res.headersSent) {

				// Respond with timeout code
				res.status(408);
				res.header("Content-Type", 'application/json');

        		res.send(JSON.stringify({ success: false, status: `Request Timeout (${config["timeout-time"]}s)` }, null, 4));
				console.warn("API request to", chalk.cyan(pathname), "timed out after", chalk.cyan(`${Date.now() - time}ms`));

			}

		}, config["timeout-time"] * 1000);

		// Attempt to respond
		try {

			// Import endpoint
			const endpoint = (await require(`.${pathname}.js`))(req, res);

			// Execute endpoint in context of request
			endpoint.then(response => {

				// Send OK status
				res.status(res.statusCode || 200);
				res.header("Content-Type", 'application/json');

				// Respond to request
        		res.send(JSON.stringify({ success: true, ...response }, null, 4));

			}).catch(error => {

				// Send error status
				res.status(res.statusCode || 400);
				res.header("Content-Type", 'application/json');

				// Send error message
        		res.send(JSON.stringify({ success: false, status: "Request Rejected", error }, null, 4));

			}).finally(function() {

				// Log timings to console for debug
				console.info("API request to", chalk.cyan(pathname), "responded in", chalk.cyan(`${Date.now() - time}ms`));

			});

		} catch(error) {

			// If module not found
			if(error.code === "ERR_MODULE_NOT_FOUND" && error.toString().includes(`Cannot find module '${__dirname}${pathname}.js'`)) {

				// Send 404 error
				res.status(404);
				res.header("Content-Type", 'application/json');
        		res.send(JSON.stringify({ success: false, status: "Not Found" }, null, 4));

			} else {

				// Send 500 error
				res.status(500);
				res.header("Content-Type", 'application/json');
        		res.send(JSON.stringify({ success: false, status: "Internal Server Error" }, null, 4));

			}

			// Log error to console
			console.error("API request to", chalk.cyan(pathname), "failed in", chalk.cyan(`${Date.now() - time}ms`));
			console.error(error);

		}
	}

	// Use body parser to parse fields
	app.use(bodyParser.json());

	// Enable rate limiting on API
	if(config["rate-limit"].use) app.use("/api/**", limiter);

	// Listen and pass API calls
	app.all("/api/**", cors(), apiParser);

	// If the application is running in development mode
	if (process.env.NODE_ENV === "dev") {

		// Start HTTP server
		http.createServer(app).listen(4000);
		console.info("Development server running on", chalk.cyan(`:4000 (http)`));

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
		http.createServer(app).listen(config["port"]);
		console.info("Production server running on", chalk.cyan(`:${config["port"]} (http)`));

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

}(express()))
