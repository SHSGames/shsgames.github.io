import React from "react";

class FrameCounter extends React.Component {
	constructor() {
		super();

		this._fps = 0;
		this._mounted = false;
		this._framecounter = performance.now();
		this.state = { FPS: 0, refresh: 0 };

		let _this = this;
		(function frameCounter(){
			requestAnimationFrame(frameCounter);
			_this._fps = 1000/(performance.now() - _this._framecounter);
			_this._framecounter = performance.now();
		}());

		const SAMPLE = 3;
		const hz = [ 40, 60, 75, 90, 100, 120, 144, 165, 200, 240, 300 ];
		let fps = [];

		setInterval(() => {
			if(this._mounted) {
				let avgfps = (this._fps + fps);
				fps.push(this._fps);

				while(fps.length > SAMPLE) fps.shift();
				avgfps = fps.reduce((a,b) => a + b, 0)/fps.length - 1;

				this.setState({
					FPS: Math.floor(this._fps),
					refresh: hz.reduce((prev, curr) => Math.abs(curr - avgfps) < Math.abs(prev - avgfps) ? curr : prev)
				});
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
			<div style={{ position: "absolute", top: "0px", left: "24px", lineHeight: "52px" }}>FPS: {this.state.FPS} - {screen.height}p@{this.state.refresh}hz</div>
		);
	}
}

export default FrameCounter;
