import { NextFunction, Request, Response } from "express";
import { webserver } from "../../package.json";

export default function middleware(req: Request, res: Response, next: NextFunction): void {

	// If ssl is required
	if (!webserver.https.enabled) return next();

	// If request is insecure
	if (req.secure) return next();

	// Redirect
	return res.redirect(307, `https://${req.hostname}${req.url}`);

}
