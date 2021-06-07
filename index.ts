import dotenv from "dotenv";
import express from "express";
import "./src/console";
import httpServer from "./src/httpServer";

// Configure variables in environment file (.env)
dotenv.config();

// Start server with new instance of express
httpServer(express());
