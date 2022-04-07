import { RequestHandler, NextFunction } from "express";

declare interface Endpoint {
	route: string | string[];
	default(req: Express.Request, res: Express.Response): RequestHandler;
}

declare interface Middleware {
	default(req: Express.Request, res: Express.Response, next: NextFunction): RequestHandler;
}

declare interface Runtime {
	default(app: Express.Application): RequestHandler;
}
