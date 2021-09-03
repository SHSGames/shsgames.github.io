import games, { Game } from "../../games";

export function slug(name: string): string {
	name = name.replace(/\s|_/g, "-");
	name = name.replace(/'|"|\./g, "");
	return name.toLowerCase();
}

export function getGameID(game: Game): number {
	return parseInt(game.name, 32);
}

export function getGameFromID(id: number): Game {
	return games.filter(game => getGameID(game) === id)[0];
}
