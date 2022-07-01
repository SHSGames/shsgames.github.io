import { v5 as uuid } from "uuid";

export default function hash(name: string, length = 8): string {
	return uuid(name, ENV.HASH)
		.substring(0, length);
}
