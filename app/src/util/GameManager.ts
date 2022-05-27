import { IGunInstance } from "gun";
import hash from "./hash";
import slug from "./slug";

export default class GameManager {

	private static gun: IGunInstance<any>;

	constructor(gun: IGunInstance<any>) {
		GameManager.gun = gun;
	}

	static add(game: Games.Game): void {
		const data = JSON.stringify(game);
		const id = hash(game.name);

		GameManager.gun.get("games")
			.get(id)
			.put({
				id,
				data,
				hash: hash(data, 36)
			});
	}

}

// eslint-disable-next-line no-extra-parens
(window as any).GameManager = GameManager;
