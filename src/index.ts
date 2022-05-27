// Add additional methods to console
import "./console";

// Configure environment file (.env)
import dotenv from "dotenv";
dotenv.config();

// Start server
import express from "express";
import server from "./server";
import GUN from "gun";

(async function() {
	const web = await server(express());
	const gun = GUN({ web });
}());
