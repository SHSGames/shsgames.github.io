import compression from "compression";
import { NextFunction, Request, Response } from "express";

// Export middleware
export default function middleware(req: Request, res: Response, next: NextFunction): void {

	// Return compression middleware
	return compression({
		filter: (req) => req.query.hasOwnProperty("decompressed") || req.header("use-gzip") === "false",
		level: 8
	})(req, res, next);

}
