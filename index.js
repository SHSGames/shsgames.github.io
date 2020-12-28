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

// Log errors to console instead of killing the application
process.on("uncaughtException", err => console.error(chalk.red("[ERROR]"), err));

// Start server
(async function server(app) {

	// Get config from config.yml
	global.config = YAML.parse(await fs.readFile("./config.yml", "utf8"));
	console.info(chalk.blue("[INFO]"), "Parsed configuration from", chalk.cyan("config.yml"));

	if(config.mysql.use) {

		const conf = config.mysql;
		delete conf.use;
		const db = mysqlPromise();

		try {
			db.configure(conf, mysql);
			global.mysql = db;
			await db.query(`show tables`)
			console.info(chalk.blue("[INFO]"), "Logged into MySQL as", chalk.cyan(`${config.mysql.user}@${config.mysql.host}`));
		} catch (error) {
			console.error(chalk.red("[ERROR]"), "Could not log into MySQL as", chalk.cyan(`${config.mysql.user}@${config.mysql.host}`));
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
		console.info(chalk.blue("[INFO]"), "Received API request", chalk.cyan(pathname));

		// Set timer to make request time out
		setTimeout(function() {
			if(!res.headersSent) {
				res.status(408);
				res.header("Content-Type", 'application/json');
        		res.send(JSON.stringify({ success: false, status: `Request Timeout (${config["timeout-time"]}s)` }, null, 4));
				console.error(chalk.red("[ERROR]"), "API request to", chalk.cyan(pathname), "timed out after", chalk.cyan(`${Date.now() - time}ms`));
			}
		}, config["timeout-time"] * 1000)

		// Attempt to respond
		try {

			const endpoint = (await import(`.${pathname}.js`)).default(req, res);

			endpoint.then(response => {
				console.info(chalk.blue("[INFO]"), "API request to", chalk.cyan(pathname), "responded in", chalk.cyan(`${Date.now() - time}ms`));
				res.status(res.statusCode || 200);
				res.header("Content-Type", 'application/json');
        		res.send(JSON.stringify({
					success: true,
					...response
				}, null, 4));
			}).catch(error => {
				console.info(chalk.blue("[INFO]"), "API request to", chalk.cyan(pathname), "responded in", chalk.cyan(`${Date.now() - time}ms`));
				res.status(res.statusCode || 400);
				res.header("Content-Type", 'application/json');
        		res.send(JSON.stringify({ success: false, status: "Request Rejected", error }, null, 4));
			})

		} catch(error) {

			if(error.code === "ERR_MODULE_NOT_FOUND") {
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
			console.error(chalk.red("[ERROR]"), "API request to", chalk.cyan(pathname), "failed in", chalk.cyan(`${Date.now() - time}ms`));
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
		console.info(chalk.blue("[INFO]"), "Development server running on", chalk.cyan(`:4000 (http)`));

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
		const { spa_root } = JSON.parse(await fs.readFile("./web-app.json", "utf8")).config;
		app.get("*", (_request, response) => response.sendFile(path.resolve("public_html/", spa_root)));

		// Start HTTP server
		http.createServer(app).listen(config["port"]);
		console.info(chalk.blue("[INFO]"), "Production server running on", chalk.cyan(`:${config["port"]} (http)`));

		// Start HTTPS server
		if(config.ssl.use === true) {
			(async function() {
				const cert = await fs.readFile(`${config.ssl["cert-root"]}/cert.pem`, "utf8");
				const key = await fs.readFile(`${config.ssl["cert-root"]}/privkey.pem`, "utf8");
				https.createServer({ key, cert }, app).listen(config.ssl.port);
				console.info(chalk.blue("[INFO]"), "SSL server running on", chalk.cyan(`:${config.ssl.port} (https)`));
			}());
		}

	}

}(express()))
