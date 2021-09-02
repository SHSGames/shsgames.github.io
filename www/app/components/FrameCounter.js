import React from "react";

class FrameCounter extends React.Component {
	constructor() {
		super();

		this._fps = 0;
		this._mounted = false;
		this._framecounter = performance.now();
		this.state = { max: 0, min: 0 };
		let fps = [];

		let _this = this;
		(function frameCounter(){
			requestAnimationFrame(frameCounter);
			_this._fps = 1000/(performance.now() - _this._framecounter);
			_this._framecounter = performance.now();
			fps.push(_this._fps);
		}());

		setInterval(() => {
			if(this._mounted) {
				this.setState({ max: Math.max(...fps), min: Math.min(...fps) });
				fps = [];
			}
		}, 1000);
	}

	componentDidMount() {
		this._mounted = true;
	}

	componentWillUnmount() {
		this._mounted = false;
	}

	render() {
		return (
			<div style={{ position: "absolute", top: "0px", left: "24px", lineHeight: "52px" }}>FPS: {Math.trunc(this.state.max)}/{Math.trunc(this.state.min)}</div>
		);
	}
}

export default FrameCounter;
