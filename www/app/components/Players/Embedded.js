import React from "react";

class FlashPlayer extends React.Component {
	componentDidMount() {
		app.game = this.props.game
	}

	render() {
		return (
			<iframe id="embedded-player" src={`/src/built-games/${this.props.game.params.file}`} width="100%" height="100%"></iframe>
		);
	}
}

export default FlashPlayer;
