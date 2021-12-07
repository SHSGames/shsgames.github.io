import { copyFile, readFile, writeFile } from "fs/promises";
import mkdirp from "mkdirp";
import path from "path";
import games from "../web/games";
import { getGameID, slug } from "../web/ts/src/gameHash";
const template = path.resolve("../../web/sitemap.txt");

(async function(){

	let sitemap = await readFile(template, "utf8");
	await Promise.all(games
		.sort((a, b) => a.name > b.name ? 1 : -1)
		.map(async game => {
			sitemap += `\n/g/${getGameID(game)}/${slug(game.name)}`;
			const out = path.resolve(`../../public_html/g/${getGameID(game)}/${slug(game.name)}.html`);
			await mkdirp(path.resolve(out, ".."));
			await copyFile(path.resolve("../../public_html/index.html"), out);
		})
	);

	await writeFile(path.resolve("../../public_html/sitemap.txt"), sitemap + "\n", "utf8");

}());
