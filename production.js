process.on("uncaughtException", e => console.error(e));

const fs = require("fs");
const https = require("https");
const express = require("express");
const compression = require("compression");
const { redirectToHTTPS } = require("express-http-to-https")

const app = express();

global.PORT = { frontend: 80, backend: 80 }

global.__appdir = __dirname;
global.service = service => require("./service/" + service);

global.privkey = fs.readFileSync(`${__appdir}/service/privkey.pem`).toString();
const config = require(`${__appdir}/service/conf.json`);
global.READABLE = config.appName;
global.NAMESPACE = config.namespace;

global.ns = text => require("uuid/v3")(text,MYSQLIKEY);

app.use(compression());
app.use(redirectToHTTPS([/localhost/,/10.0.0.*/],[/\/http/], 301));
app.use(express.static("dist", { extensions: [ "html" ] }));

require("./routes.js")(app);

app.all("/service/*",function(req,res){
	let module = __dirname + "/service/web/" + req.url.split("service/")[1] + ".js";
	try {
		require(module)(req,res);
	} catch(e) {
		console.error(e);
		res.sendStatus(503);
	}
})

app.listen(80);
https.createServer({
	key: fs.readFileSync("/etc/letsencrypt/live/shsg.biz.tm/privkey.pem"),
  	cert: fs.readFileSync("/etc/letsencrypt/live/shsg.biz.tm/cert.pem")
}, app).listen(443);
