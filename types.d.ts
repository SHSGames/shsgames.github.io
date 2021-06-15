declare module "offline-plugin";
declare module "photoncss";
declare module "photoncss/react";
declare module "react-dom";
declare module "react-router-dom";

declare type APIResponse = Record<string, unknown>;

declare interface Endpoint {
	route: string | string[];
	default(req: Request, res: Response): unknown;
}

declare interface Middleware {
	default(req: Request, res: Response, next: NextFunction): void | Promise<void>;
}

declare interface Runtime {
	default(app: Express): void | Promise<void>;
}
