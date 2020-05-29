const express = require("express");
const app = express();

const compression = require("compression");
const { redirectToHTTPS } = require("express-http-to-https")

const env = process.env.NODE_ENV || "development";

process.on("uncaughtException", console.error);

app.use(compression());
app.use(redirectToHTTPS([/localhost/, /10.0.0.*/], [/\/http/], 301));

if(env === "production") {
	app.use(express.static("public_html", { extensions: ["html"] }));
}

app.all("/api/*", function(req, res) {
	const path = `${__dirname}${req.url}.js`;
	try {
		require(path)(req, res);
	} catch({ error }) {
		res.json({ status: 500, error });
	}
});

if(env === "production") {
	app.all("/*", function(req, res) {
		res.sendFile(`${__dirname}/public_html/index.html`);
	});
}

app.listen(env === "development" ? 3000 : 80);
