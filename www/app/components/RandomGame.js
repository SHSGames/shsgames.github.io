import React from "react";
import { Redirect } from "react-router-dom";

class RandomGame extends React.Component {
	constructor() {
		super();
		this.state = { redirect: null }
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		app.random().then(game => app.launch(game, this));
	}

	render() {
		if(this.state.redirect) return <Redirect to={this.state.redirect} push/>;
		return (
			<div onClick={this.onClick}>{this.props.children}</div>
		);
	}
}

export default RandomGame;
