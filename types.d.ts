declare type APIResponse = Record<string, unknown>;

declare interface APIEndpoint {
	route: string | string[];
	default(req: Request, res: Response): unknown;
}
