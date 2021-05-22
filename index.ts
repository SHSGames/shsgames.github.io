import dotenv from "dotenv";
import express from "express";
import server from "./src/server";
import "./src/console";

// Configure variables in environment file (.env)
dotenv.config();

// Start server with new instance of express
server(express());
