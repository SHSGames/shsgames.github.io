import { Spinner, VHCenter } from "photoncss/lib/react";
import React, { useEffect, useState } from "react";
import { gameboy, iframe, unity, nes } from "../src/loader";
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
		if (game.runner === "EMULATOR_GBA") gameboy(game);
		if (game.runner === "IFRAME") iframe(game);
		if (game.runner === "EMULATOR_NES") nes(game);
	}, []);

	return (
		<div id="game-renderer" style={{ height }}>
			<VHCenter style={{ pointerEvent: "none" }}>
				<Spinner/>
			</VHCenter>
		</div>
	);
}
