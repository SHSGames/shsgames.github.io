/* eslint camelcase: off */
import { Spinner, VHCenter } from "photoncss/lib/react";
import React, { useEffect, useState } from "react";
import { gameboy, iframe, unity, nes, ruffle } from "../util/loader";
declare const audio_ctx: AudioContext;
import { Game } from "../../games";

export type Props = { game: Game };
export default function GameRenderer({ game }: Props): JSX.Element {

	const [ height, setHeight ] = useState(0);
	const resize = () => setHeight(1 / aspectRatio * $("#game-player")[0].clientWidth);
	useEffect(resize, []);
	$(window).on("resize", resize);

	const { aspectRatio = 4/3 } = game;

	useEffect(function() {
		if (game.runner === "UNITY") unity(game);
		if (game.runner === "RUFFLE") ruffle(game);
		if (game.runner === "EMULATOR_GBA") gameboy(game);
		if (game.runner === "IFRAME") iframe(game);
		if (game.runner === "EMULATOR_NES") nes(game);
	}, [ game.name ]);

	useEffect(function() {
		if (game.runner === "EMULATOR_NES") {
			if ("audio_ctx" in window) {
				if (audio_ctx.state === "suspended") audio_ctx.resume();
			}
			return function() {
				if ("audio_ctx" in window && audio_ctx.state === "running") audio_ctx.suspend();
			};
		}
	}, []);

	return (
		<div id="game-renderer" style={{ height }}>
			<VHCenter style={{ pointerEvent: "none" }}>
				<Spinner/>
			</VHCenter>
		</div>
	);
}
