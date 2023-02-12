import { Col } from "photoncss/lib/react";
import React, { useEffect, useState } from "react";
import Adsense from "./Adsense";
import games, { Game } from "../../games";
import GameCard from "./GameCard";
import { getGameID } from "../util/gameHash";

export default function Component(): JSX.Element | null {

	const [ stars, setStars ] = useState(localStorage.getItem("stars")?.split(",")
		.filter(a => a !== "")
		.filter(a => a !== undefined) ?? []);

	useEffect(function() {
		let shouldLoop = true;
		(function loop() {
			if (shouldLoop) requestAnimationFrame(loop);
			const newState = localStorage.getItem("stars")?.split(",")
				.filter(a => a !== "")
				.filter(a => a !== undefined) ?? [];
			if (newState.join() !== stars.join()) setStars(newState);
		}());
		return () => {
			shouldLoop = false;
		};
	});

	if (stars.length === 0) return null;

	return (
		<Col className="favorites">

			<div className="title">
				<h3>Favorites</h3>
				<span className="badge" style={{ marginLeft: 16 }}>{ stars.length } Game{ stars.length === 1 ? "":"s" }</span>
			</div>

			<Adsense
				style={{ display: "block", textAlign: "center" }}
				adLayout="in-article"
				adFormat="fluid"
				fullWidthResponsive="true"/>

			{ games
				.filter(game => stars.includes(getGameID(game)))
				.sort((a: Game, b: Game) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)
				.map((game: Game, key) => <GameCard game={game} key={key}/>)}

			<Col>
				<br /><br /><hr /><br /><b></b>
			</Col>

		</Col>
	);
}
