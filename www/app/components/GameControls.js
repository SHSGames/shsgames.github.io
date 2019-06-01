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
				<div>
					<div className="game-controls">
						<FrameCounter/>
						<a className="btn flat primary waves-effect" onClick={ () => $("#jsnes-game")[0].requestFullscreen() }>fullscreen</a>
					</div>
					<div className="note bug">
						<div className="header"></div>
						<div className="content">Sound has been disabled on NES games due to a bug that is currently being investigated</div>
					</div>
					<div className="note controls">
						<div className="header"></div>
						<div className="content"><code className="keycode">↑</code> = <code className="keycode mono">UP</code></div><hr/>
						<div className="content"><code className="keycode">↓</code> = <code className="keycode mono">DOWN</code></div><hr/>
						<div className="content"><code className="keycode">←</code> = <code className="keycode mono">LEFT</code></div><hr/>
						<div className="content"><code className="keycode">→</code> = <code className="keycode mono">RIGHT</code></div><hr/>
						<div className="content"><code className="keycode mono">A</code>/<code className="keycode mono">Q</code> = <code className="keycode mono">A</code></div><hr/>
						<div className="content"><code className="keycode mono">S</code>/<code className="keycode mono">O</code> = <code className="keycode mono">B</code></div><hr/>
						<div className="content"><code className="keycode mono">TAB</code> = <code className="keycode mono">SELECT</code></div><hr/>
					</div>
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
	}
}

export default GameControls;
