import { Spinner, VHCenter } from "photoncss/lib/react";
import React, { useEffect, useState } from "react";
import { Game } from "../../games";

export type Props = { game: Game };
export default function GameRenderer({ game }: Props): JSX.Element {

	const [ height, setHeight ] = useState(0);

	useEffect(updateHeight, []);
	$(window).on("resize", updateHeight);

	function updateHeight() {
		const { aspectRatio = 4/3 } = game;
		setHeight(1 / aspectRatio * $(".game-renderer")[0].clientWidth);
	}

	return (
		<div className="game-renderer" style={{ height }}>
			<VHCenter>
				<Spinner/>
			</VHCenter>
		</div>
	);
}
