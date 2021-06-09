import { NextFunction, Request, Response } from "express";
import cors from "cors";

// Export middleware
export default function middleware(req: Request, res: Response, next: NextFunction): void {

	// Return compression middleware
	return cors()(req, res, next);

}
