import express, { Express } from "express";

export default function runtime(app: Express): void {

	// Serve static files from the last built server
	app.use(express.static("public_html", { extensions: [ "html" ] }));

}
