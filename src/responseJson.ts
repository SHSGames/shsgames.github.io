/* eslint @typescript-eslint/no-explicit-any: off */
import { Request, Response } from "express";

export default function responseJson(req: Request, res: Response) {
	return function(body: unknown[] | Record<string, unknown>): Response<any, Record<string, any>> {
		res.header("Content-Type", "application/json; charset=utf-8");
		if (typeof body === "object") {
			const pretty = req.query.hasOwnProperty("pretty") || req.header("pretty") === "true";
			return res.json(JSON.stringify(body, pretty ? null:undefined, pretty ? 4:undefined));
		}
		return res.send(body);
	};
}
