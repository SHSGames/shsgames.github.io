import React from "react";

window.installer = null;
window.addEventListener("beforeinstallprompt", event => {
	event.preventDefault();
	window.installer = event;
});

class WebInstaller extends React.Component {
	constructor() {
		super();

		let _this = this;
		let _cache = null;
		this._mounted = false;
		this.state = { installable: false };
		(function listen(){
			requestAnimationFrame(listen);
			if(window.installer !== _cache && _this._mounted) {
				_cache = window.installer;
				_this.setState({ installable: window.installer !== null });
			}
		}())
	}

	componentDidMount() {
		this._mounted = true;
	}

	componentWillUnmount() {
		this._mounted = false;
	}

	install() {
		if(this.props.install !== true) return;
		window.installer.userChoice.then(result => {
			if (result.outcome === "accepted") window.installer = null;
		});
		window.installer.prompt();
	}

	render() {
		if (this.state.installable) {
			if (this.props.install) {
				return <div style={{ display: "inline-block" }} onClick={() => this.install()}>{this.props.children}</div>;
			} else {
				return this.props.children;
			}
		} else {
			return null
		}
	}
}

export default WebInstaller;
