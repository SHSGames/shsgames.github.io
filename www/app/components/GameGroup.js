import React from "react";

import "./GameGroup.less";

import GameCard from "./GameCard";
import Adview from "./Adview";

class GameGroup extends React.Component {
	render() {
		return (
			<div className="gamegroup">
				<Adview
				  style={{ display: "block", marginTop: 8 }}
				  height={200}
			      data-ad-layout="in-article"
			      data-ad-format="fluid"
			      data-ad-client="ca-pub-6128732932572955"
			      data-ad-slot="8241019118"/>
				<div className="title">
					<h2 id={app.slug(this.props.group.name)}>{this.props.group.name}</h2>
				</div>
				<div className="row">
					{ this.props.group.games.map((game, key) => <GameCard game={game} key={key}/> ) }
				</div>
			</div>
		);
	}
}

export default GameGroup;
