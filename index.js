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

// Log errors to console instead of killing the application
process.on("uncaughtException", err => console.error(chalk.red("[ERROR]"), err));

// Start server
(async function server(app) {

	// Get config from config.yml
	const config = YAML.parse(await fs.readFile("./config.yml", "utf8"));
	console.info(chalk.blue("[INFO]"), "Parsed configuration from", chalk.cyan("config.yml"));

	// Configure rate limiting
	const limiter = rateLimit({
  		windowMs: config["rate-limit"]["window-time"] * 1000,
  		max: config["rate-limit"]["max-requests"]
	});

	if(config["rate-limit"].use) app.use(limiter);

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
				res.json({ success: false, status: `408 Request Timeout (${config["timeout-time"]}s)` });
				console.error(chalk.red("[ERROR]"), "API request to", chalk.cyan(pathname), "timed out after", chalk.cyan(`${Date.now() - time}ms`));
			}
		}, config["timeout-time"] * 1000)

		// Attempt to respond
		try {

			const endpoint = (await import(`.${pathname}.js`)).default(req, res);

			endpoint.then(response => {
				console.info(chalk.blue("[INFO]"), "API request to", chalk.cyan(pathname), "responded in", chalk.cyan(`${Date.now() - time}ms`));
				res.status(200),
				res.json({
					success: true,
					...response
				})
			}).catch(error => {
				console.info(chalk.blue("[INFO]"), "API request to", chalk.cyan(pathname), "responded in", chalk.cyan(`${Date.now() - time}ms`));
				res.status(400);
				res.json({ success: false, status: "400 Request Rejected", error });
			})

		} catch(error) {

			if(error.code === "ERR_MODULE_NOT_FOUND") {
				// Send 404 error
				res.status(404);
				res.json({ success: false, status: "404 Not Found" });
			} else {
				// Send 500 error
				res.status(500);
				res.json({ success: false, status: "500 Internal Server Error" });
			}

			// Log error to console
			console.error(chalk.red("[ERROR]"), "API request to", chalk.cyan(pathname), "failed in", chalk.cyan(`${Date.now() - time}ms`));
			console.error(error);

		}
	}

	// Use body parser to parse fields
	app.use(bodyParser.json());

	// Listen and pass API calls
	app.all("/api/**", cors(), apiParser);

	// If the application is running in development mode
	if (process.env.NODE_ENV === "dev") {

		// Start HTTP server
		http.createServer(app).listen(4000);
		console.info(chalk.blue("[INFO]"), "Development server running on", chalk.cyan(":4000 (http)"));

	}

	// If the application is running in production mode
	else if (process.env.NODE_ENV !== "dev") {

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
		app.get("*", (_request, response) => response.sendFile(path.join(__dirname, "public_html/", require("./web-app.json").config["spa_root"])));

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
