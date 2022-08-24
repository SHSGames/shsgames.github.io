/* eslint-disable no-extra-parens */
/* eslint camelcase: off */
import React from "react";
import { renderToString } from "react-dom/server";
import { Game } from "../../games";
declare const UnityLoader: any;
declare function nes_load_url(id: string, rom: string): any;

export function unity(game: Game): void {

	$("head")
		.children("[data-reactroot]")
		.remove();
	$("head").append(renderToString(<>
		<script src="https://cdn.jsdelivr.net/gh/SHSGames/shsgames.github.io@10ce8f7b6a4ad83aa35a9448b51d6116f2d0de9d/www/src/js/unity.min.js" defer></script>
		<script src="https://cdn.jsdelivr.net/gh/SHSGames/shsgames.github.io@10ce8f7b6a4ad83aa35a9448b51d6116f2d0de9d/www/src/js/unity-loader.min.js" defer></script>
	</>));

	const load = () => UnityLoader.instantiate("game-renderer", game.game);
	(function test(){
		if (window.hasOwnProperty("UnityLoader")) return load();
		setImmediate(test);
	}());
}

export function gameboy(game: Game): void {
	$("#game-renderer").html(renderToString(<iframe
		src={`/IodineGBA/index.html?${game.game}&ts=${Date.now()}`}
		frameBorder="0"
		width="100%"
		height="100%"
		scrolling="no"></iframe>));
}

export function iframe(game: Game): void {
	$("#game-renderer").html(renderToString(<iframe
		src={game.game}
		frameBorder="0"
		width="100%"
		height="100%"
		scrolling="no"></iframe>));
}

export function nes(game: Game): void {

	(window as any).jsnes = null;
	$("head")
		.children("[data-reactroot]")
		.remove();
	$("head").append(renderToString(<script src="https://cdn.jsdelivr.net/gh/SHSGames/shsgames.github.io@10ce8f7b6a4ad83aa35a9448b51d6116f2d0de9d/www/src/js/jsnes.min.js" defer></script>));

	function load(){
		nes_load_url("jsnes-game", game.game);
		(function resize(){
			requestAnimationFrame(resize);
			$("#jsnes-game").css("transform", `scale(${$("#game-renderer").width()!/$("#jsnes-game").width()!})`);
		}());
	}

	(function test(){
		if (window.hasOwnProperty("jsnes") && (window as any).jsnes !== null) {
			$("head").append(renderToString(<script src="https://cdn.jsdelivr.net/gh/SHSGames/shsgames.github.io@10ce8f7b6a4ad83aa35a9448b51d6116f2d0de9d/www/src/js/jsnesplayer.min.js" defer></script>));
			(function test(){
				if (window.hasOwnProperty("nes_load_url")) return load();
				setImmediate(test);
			}());
			return;
		}
		setImmediate(test);
	}());

	$("#game-renderer").html(renderToString(<canvas id="jsnes-game" width="256" height="240" style={{ width: "100%", height: "100%" }}></canvas>));
}

export function ruffle(game: Game): void {
	$("#game-renderer").html(renderToString(<object id="flash-player" data={game.game} width="100%" height="100%" data-reactroot=""></object>));
}
