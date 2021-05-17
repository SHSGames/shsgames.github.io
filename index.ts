import dotenv from "dotenv";
import express from "express";
import "./src/console";
import server from "./src/server";

// Configure variables in environment file (.env)
dotenv.config();

// Start server with new instance of express
server(express());
