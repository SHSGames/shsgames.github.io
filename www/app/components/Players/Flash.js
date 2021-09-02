import React from "react";

class FlashPlayer extends React.Component {
	componentDidMount() {
		app.game = this.props.game
	}

	render() {
		return (
			<object id="flash-player" data={`//cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/${app.slug(this.props.game.name)}.swf`} width="100%" height="100%" {...this.props.game.params.options}></object>
		);
	}
}

export default FlashPlayer;
