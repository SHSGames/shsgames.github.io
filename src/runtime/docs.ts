import express, { Express } from "express";
import extract from "extract-zip";
import { writeFile } from "fs/promises";
import fetch from "node-fetch";
import { resolve } from "path";

export default async function middleware(app: Express): Promise<void> {

	// Get insomnia path
	const insomnia = resolve("insomnia.json");

	// Get insomnia-viewer path
	const binary = resolve("lib/insomnia-viewer.zip");
	const insomniaViewer = resolve("lib/insomnia-viewer-site");

	// Download latest insomnia-viewer version
	await fetch("https://github.com/JoshMerlino/insomnia-viewer/archive/refs/heads/site.zip")
		.then(resp => resp.arrayBuffer())
		.then(resp => writeFile(binary, Buffer.from(resp), "binary"));

	// Extract
	await extract(binary, { dir: resolve(insomniaViewer, "..") });

	// Serve static
	app.use("/insomnia.json", (_req, res) => res.sendFile(insomnia));
	app.use("/docs", express.static(insomniaViewer));
	app.use("/docs/**", (_req, res) => res.sendFile(resolve(insomniaViewer, "index.html")));

}
