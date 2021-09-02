import React from "react";

class Body extends React.Component {
	constructor() {
		super();
		this._mounted = false;
		this.state = { height: 0 };

		let _this = this;
		(function frame(){
			requestAnimationFrame(frame);
			_this._mounted && _this.setState({ height: window.innerHeight- $("footer").height() - 130 });
		}())
	}

	componentDidMount() {
		this._mounted = true;
	}

	componentWillUnmount() {
		this._mounted = false;
	}

	render() {
		return (
			<div style={{ minHeight: this.state.height, display: "inline-block", width: "100%" }}>{this.props.children}</div>
		);
	}
}

export default Body;
