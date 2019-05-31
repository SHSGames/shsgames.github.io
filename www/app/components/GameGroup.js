import React from "react";

import "./GameGroup.less";

import GameCard from "./GameCard";

class GameGroup extends React.Component {
	render() {
		return (
			<div className="gamegroup">
				<div className="title">
					<h2 id={app.slug(this.props.group.name)}>{this.props.group.name}</h2>
					<div className="row">
						{ this.props.group.games.map((game, key) => <GameCard game={game} key={key}/> ) }
					</div>
				</div>
			</div>
		);
	}
}

export default GameGroup;
