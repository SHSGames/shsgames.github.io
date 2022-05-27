import { NextFunction, Request, Response } from "express";

export default function middleware(req: Request, res: Response, next: NextFunction): void {

	console.log(process.env);

	// If request is insecure
	if (req.secure || process.env.MODE === "DEVELOPMENT") return next();

	// Redirect
	return res.redirect(307, `https://${req.hostname}${req.url}`);

}
