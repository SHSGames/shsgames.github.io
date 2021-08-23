import chalk from "chalk";
import { NextFunction, Request, Response } from "express";

// Export middleware
export default function middleware(req: Request, res: Response, next: NextFunction): void {

	// Get route root
	const route = req.originalUrl.split("?")[0].split("#")[0];

	// Get current timestamp
	const timestamp = Date.now();

	// Log request on hit
	console.info(
		chalk.blueBright("INB"),
		"<-",
		chalk.cyan(route),
		chalk.magenta(req.method),
		chalk.redBright(req.secure ? "":"INSECURE")
	);

	// Monitor endpoint for a response
	const completionCheck = setInterval(function() {

		// If the endpoint has not responded, cancel iteration
		if (!res.headersSent) return;

		// Calculate the total time the endpoint took to respond
		const duration = Date.now() - timestamp;

		// Log response to console
		console.info(
			chalk.blueBright("OUB"),
			"->",
			chalk.cyan(route),
			chalk.magenta(req.method),
			chalk.greenBright(res.statusCode),
			chalk.yellowBright(`${duration}ms`)
		);

		// Stop loop
		clearInterval(completionCheck);

	});

	// Process next step
	return next();

}
