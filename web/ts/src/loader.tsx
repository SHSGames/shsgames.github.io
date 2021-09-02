import React from "react";
import { renderToString } from "react-dom/server";
import { Game } from "../../games";
declare const UnityLoader: any;

export function unity(game: Game): void {
	const load = () => UnityLoader.instantiate("game-renderer", game.game);
	(function test(){
		if (window.hasOwnProperty("UnityLoader")) return load();
		setTimeout(test);
	}());
}

export function gameboy(game: Game): void {
	$("#game-renderer").html(renderToString(<iframe
		src={`/IodineGBA.html?${game.game}`}
		frameBorder="0"
		width="100%"
		height="100%"
		scrolling="no"></iframe>));
}
