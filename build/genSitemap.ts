import { readFile, writeFile } from "fs/promises";
import path from "path";
import games from "../web/games";
import { getGameID, slug } from "../web/ts/src/gameHash";
const template = path.resolve("../../web/sitemap.txt");

(async function(){

	let sitemap = await readFile(template, "utf8");
	games.map(game => {
		sitemap += `\n/g/${getGameID(game)}/${slug(game.name)}`;
	});

	await writeFile(path.resolve("../../public_html/sitemap.txt"), sitemap + "\n", "utf8");

}());
