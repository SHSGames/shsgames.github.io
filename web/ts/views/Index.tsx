import GameCard from "components/GameCard";
import { Container, Row } from "photoncss/lib/react";
import React from "react";
import games, { Game } from "../../games";

export const route = "/";

export default function View(): JSX.Element {
	return (
		<Container>

			<br/>
			<div className="title">
				<h3>Games</h3>
				<span className="badge" style={{ marginLeft: 16 }}>{ games.length } Games</span>
			</div>

			<Row>
				{ games
					.sort((a: Game, b: Game) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)
					.map((game: Game, key) => <GameCard game={game} key={key}/>)}
			</Row>

		</Container>
	);
}
