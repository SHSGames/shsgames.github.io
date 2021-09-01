import { NextFunction, Request, Response } from "express";

// Export middleware
export default function prettyJSON(req: Request, res: Response, next: NextFunction): void {

	// Modify the res.json method
	res.json = function(body: unknown[] | Record<string, unknown>) {

		// Set content-type header
		res.header("Content-Type", "application/json; charset=utf-8");

		// If its an object or array
		if (typeof body === "object") {

			// Determine if it should be formatted
			const pretty = req.query.hasOwnProperty("pretty") || req.header("pretty") === "true";

			// Send response
			return res.send(JSON.stringify(body, pretty ? null:undefined, pretty ? 4:undefined));

		}

		// Send default
		return res.send(body);

	};

	// Return NextFunction
	return next();

}
