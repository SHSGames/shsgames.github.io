import dotenv from "dotenv";
import express from "express";
import "./src/console";
import HTTPServer from "./src/HTTPServer";

// Configure variables in environment file (.env)
dotenv.config();

// Start server with new instance of express
HTTPServer(express());
