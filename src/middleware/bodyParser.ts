import { json, NextFunction, Request, Response } from "express";
import { ServerResponse } from "http";

// Export middleware
export default function middleware(req: Request, res: Response, next: NextFunction): void {

	// Return compression middleware
	return json()(req, <ServerResponse>res, next);

}
