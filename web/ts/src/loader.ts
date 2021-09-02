import { Game } from "../../games";
declare const UnityLoader: any;

export function unity(game: Game): void {
	const load = () => UnityLoader.instantiate("game-renderer", game.game);
	(function test(){
		if (window.hasOwnProperty("UnityLoader")){
			load();
		} else {
			setTimeout(test);
		}
	}());
}
