declare type APIResponse = Record<string, unknown>;

declare interface APIEndpoint {
	route: string | string[];
	default(req: Request, res: Response): unknown;
}

declare interface Middleware {
	default(req: Request, res: Response, next: NextFunction): void | Promise<void>;
}

declare interface Runtime {
	default(app: Express): void | Promise<void>;
}
