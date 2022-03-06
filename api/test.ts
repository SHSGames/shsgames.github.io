import { Request, Response } from "express";

export const route = [
	"v1/test",
	"v1/test/**"
];

export default function api(req: Request, res: Response): void {
	res.json({});
}
