import React from "react";
import { Redirect } from "react-router-dom";

class GameView extends React.Component {
	constructor() {
		super();
		this.state = { redirect: location.pathname.split("/game/")[1] }
	}

	render() {
		return <Redirect to={`/g/${this.state.redirect}`}/>;
	}
}

export default GameView;
