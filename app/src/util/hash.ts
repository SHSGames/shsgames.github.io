import { v5 as uuid } from "uuid";

export default function hash(name: string): string {
	return uuid(name, "abe8da62-0c66-11ec-9f18-8be62656cabb")
		.substring(0, 8);
}
