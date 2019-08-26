import React from "react";

class FlashPlayer extends React.Component {
	componentDidMount() {
		app.game = this.props.game
	}

	render() {
		return (
			<object id="snes-player" data="/src/snes-player.swf" width="100%" height="100%" {...this.props.game.params.options}>
				<param name="flashvars" value={`system=snes&url=${app.service}/gcp/games/${app.slug(this.props.game.name)}.smc`}/>
			</object>
		);
	}
}

export default FlashPlayer;
