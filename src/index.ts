// Add additional methods to console
import "./src/console";

// Configure environment file (.env)
import dotenv from "dotenv";
dotenv.config();

// Start server
import express from "express";
import server from "./src/server";
server(express());
