import { readdir, lstat } from "fs/promises";
import { resolve } from "path";

export interface Context {
	name: string;
	path: string;
	module: {
		route: string | string[];
		default(): void;
	};
	parents: string[];
}

// Function to get a context of every API in the folder.
export default async function getContext(dir: string): Promise<Context[]> {

	// Scan directory.
	let items = await readdir(dir);
	items = items.filter(item => !item.includes(".js.map"));

	let files: Context[] = [];
	for (const name of items) {

		const path = `${dir}/${name}`;

		if ((await lstat(`${dir}/${name}`)).isDirectory()) {
			files = [ ...files, ...await getContext(`${dir}/${name}`) ];
		} else {
			files.push({ name, path, module: require(resolve(path)), parents: dir.split("/") });
		}

	}

	return files;

}
