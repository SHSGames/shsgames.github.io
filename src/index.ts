// Configure environment file (.env)
import dotenv from "dotenv";
import express from "express";
import "./console";
import server from "./server";

dotenv.config();

// Start server
server(express());
