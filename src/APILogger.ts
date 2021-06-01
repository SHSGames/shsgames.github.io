import chalk from "chalk";
import { NextFunction, Request, Response } from "express";
import { v1 as uuid } from "uuid";

// Export middleware
export default function APILogger(req: Request, res: Response, next: NextFunction): void {

	const [ route ] = req.originalUrl.split("?");

	// Generate a unique ID for this request
	const requestId = uuid();
	res.header("Request-ID", requestId);

	const timestamp = Date.now();

	// Log request on hit
	console.info("<-", chalk.cyan(route), chalk.magenta(req.method));

	// Monitor endpoint for a response
	const completionCheck = setInterval(function() {

		// If the endpoint has not responded, cancel iteration
		if (!res.headersSent) return;

		// Calculate the total time the endpoint took to respond
		const duration = Date.now() - timestamp;

		// Log response to console
		console.info("->", chalk.cyan(route), chalk.magenta(req.method), chalk.greenBright(res.statusCode), chalk.yellowBright(`${duration}ms`));

		// Stop loop
		clearInterval(completionCheck);

	});

	// Queue request timeout in case the endpoint dosn't respond in time
	setTimeout(function() {

		// Make sure it didn;t respond
		if (res.headersSent) return;

		// Log timeout
		console.warn("API request timed out", chalk.magenta(req.method), chalk.cyan(route));

		// Send error message
		res.status(408).json({
			error: true,
			code: 408,
			message: "Request timed out."
		});

	}, parseInt(process.env.TIMEOUT || "30") * 1000);

	// Process next step
	return next();

}
