import React from "react";

class FrameCounter extends React.Component {
	constructor() {
		super();

		this._fps = 0;
		this._mounted = false;
		this._framecounter = performance.now();
		this.state = { FPS: 0 };

		let _this = this;
		(function frameCounter(){
			requestAnimationFrame(frameCounter);
			_this._fps = 1000/(performance.now() - _this._framecounter);
			_this._framecounter = performance.now();
		}());

		setInterval(() => this._mounted && this.setState({ FPS: Math.floor(this._fps) }), 1000);
	}

	componentDidMount() {
		this._mounted = true;
	}

	componentWillUnmount() {
		this._mounted = false;
	}

	render() {
		return (
			<div style={{ position: "absolute", top: "0px", left: "24px", lineHeight: "52px" }}>FPS: {this.state.FPS}</div>
		);
	}
}

export default FrameCounter;
