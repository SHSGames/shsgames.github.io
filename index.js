const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const express = require("express");
const fs = require("fs").promises;
const http = require("http");
const path = require("path");
const YAML = require("yaml");

// Log errors to console instead of killing the application
process.on("uncaughtException", err => console.error("[ERROR]", err));

// If the application is running in development mode
if (process.env.NODE_ENV === "dev") {

	// Start development server
	(async function server(app) {

		// Use body parser to parse fields
		app.use(bodyParser.json());

		// Listen and pass API calls to individual files
		app.all("/api/*", cors(), (req, res) => {
			try {
				require(`${__dirname}${req.url}.js`)(req, res)
				console.error("[INFO]", "Responded to API call", req.url);
			} catch({ error }) {
				console.error("[ERROR]", req.url, error);
				res.json({ status: 500, error });
			}
		});

		// Start HTTO server
		http.createServer(app).listen(4000);
		console.log("[INFO]", `Development server running on :4000 (http).`);

	}(express()));

	// Prevent production server from starting aswell
	return;

}

// Start production server
(async function server(app) {

	// Get config from config.yml
	const config = YAML.parse(await fs.readFile("./config.yml", "utf8"));

	// Use gzip when serving files
	app.use(compression());

	// Use body parser to parse fields
	app.use(bodyParser.json());

	// Redirect HTTP to HTTPS
	app.all("*", ({ secure, hostname, url }, res, next) => {
	  	if (config.ssl.use === false || config.ssl.redirect === false || secure) return next();
	  	else res.redirect(`https://${hostname}${url}`);
	});

	// Server static files from the last built server
	app.use(express.static("public_html", { extensions: ["html"] }));

	// Listen and pass API calls to individual files
	app.all("/api/*", cors(), (req, res) => {
		try {
			require(`${__dirname}${req.url}.js`)(req, res)
			console.error("[INFO]", "Responded to API call", req.url);
		} catch({ error }) {
			console.error("[ERROR]", req.url, error);
			res.json({ status: 500, error });
		}
	});

	// Catch 404's and send the index document - history-fallback-api
	app.get("*", (_request, response) => response.sendFile(path.join(__dirname, "public_html/", require("./web-app.json").config["spa_root"])));

	// Start HTTP server
	http.createServer(app).listen(config["port"]);
	console.log("[INFO]", `HTTP server running on :${config["port"]} (http).`);

	// Start HTTPS server
	if(config.ssl.use === true) {
		(async function() {
			const cert = await fs.readFile(`${config.ssl["cert-root"]}/cert.pem`, "utf8");
			const key = await fs.readFile(`${config.ssl["cert-root"]}/privkey.pem`, "utf8");
			https.createServer({ key, cert }, app).listen(config.ssl.port);
			console.log("[INFO]", `SSL server running on :${config.ssl.port} (https).`);
		}());
	}

}(express()));
