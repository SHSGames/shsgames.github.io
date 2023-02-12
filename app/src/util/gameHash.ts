import games, { Game } from "../../games";
import { v5 as uuid } from "uuid";

export function slug(name: string): string {
	name = name.replace(/\s|_/g, "-");
	name = name.replace(/'|"|\./g, "");
	return name.toLowerCase();
}

export function getGameID(game: Game): string {
	return uuid(game.name, "abe8da62-0c66-11ec-9f18-8be62656cabb")
		.substr(0, 8);
}

export function getGameFromID(id: string): Game {
	return games.filter(game => getGameID(game) === id)[0];
}
