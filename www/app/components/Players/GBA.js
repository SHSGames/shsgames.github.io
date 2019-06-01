import React from "react";

class GBAPlayer extends React.Component {
	constructor(props){
		super(props);
		this._arguments = props.game.params.options;
	}

	componentDidMount() {
		app.game = this.props.game;
		setTimeout(this.componentProbablyRendered)
		Photon.disableArrowKeyScrolling = true;
	}

	render() {
		return (
			<div id="gba-player" style={{ width: "100%", height: "100%", margin: "auto" }}>
				<iframe src="/src/IodineGBA/launcher.html" frameBorder="0" height="600px"></iframe>
			</div>
		);
	}
}

export default GBAPlayer;
