import React from "react";

import "./GameControls.less";

import FrameCounter from "./FrameCounter";

class GameControls extends React.Component {
	render() {
		if(this.props.engine === "flash") {
			return (
				<div className="game-controls">
					<FrameCounter/>
					<a className="btn flat primary waves-effect" onClick={ () => $("#flash-player")[0].requestFullscreen() }>fullscreen</a>
				</div>
			);
		} else if(this.props.engine === "gba") {
			return (
				<div className="game-controls">
					<FrameCounter/>
					<a className="btn flat primary waves-effect" onClick={ () => $("#gba-player")[0].requestFullscreen() }>fullscreen</a>
				</div>
			);
		} else if(this.props.engine === "nes") {
			return (
				<div className="game-controls">
					<FrameCounter/>
					<a className="btn flat primary waves-effect" onClick={ () => $("#jsnes-game")[0].requestFullscreen() }>fullscreen</a>
				</div>
			);
		} else if(this.props.engine === "snes") {
			return (
				<div className="game-controls">
					<FrameCounter/>
					<a className="btn flat primary waves-effect" onClick={ () => $("#snes-game")[0].requestFullscreen() }>fullscreen</a>
				</div>
			);
		} else if(this.props.engine === "unity") {
			return (
				<div className="game-controls">
					<FrameCounter/>
					<a className="btn flat primary waves-effect" onClick={ () => $("#unity-player")[0].requestFullscreen() }>fullscreen</a>
				</div>
			);
		}
		return (
			<div className="game-controls">
				<FrameCounter/>
			</div>
		);
	}
}

export default GameControls;
