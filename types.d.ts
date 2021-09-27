declare module "offline-plugin";

declare type APIResponse = Record<string, unknown>;

declare interface Endpoint {
	route: string | string[];
	default(req: Request, res: Response): unknown;
}

declare interface Middleware {
	default(req: Request, res: Response, next: NextFunction): unknown;
}

declare interface Runtime {
	default(app: Express): void | Promise<void>;
}
