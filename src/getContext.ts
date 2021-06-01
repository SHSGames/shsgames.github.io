/* eslint no-undef: off */
/* eslint @typescript-eslint/no-var-requires: off */
import { lstat, readdir } from "fs/promises";
import { resolve } from "path";

export interface Context<T> {
	name: string;
	path: string;
	module: T;
	parents: string[];
}

// Function to get a context of every API in the folder.
export default async function getContext<T = NodeModule>(dir: string): Promise<Context<T>[]> {

	// Scan directory.
	let items = await readdir(dir);
	items = items.filter(item => !item.includes(".js.map"));

	let files: Context<T>[] = [];
	for (const name of items) {

		const path = `${dir}/${name}`;

		if ((await lstat(`${dir}/${name}`)).isDirectory()) {
			files = [ ...files, ...await getContext<T>(`${dir}/${name}`) ];
		} else {
			files.push({ name, path, module: require(resolve(path)) as T, parents: dir.split("/") });
		}

	}

	return files;

}
