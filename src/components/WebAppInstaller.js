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
		window.installer.userChoice.then(result => {
			if (result.outcome === "accepted") window.installer = null;
		});
		window.installer.prompt();
	}

	render() {
		if (this.state.installable) {
			if (this.props.install) {
				return <div onClick={() => this.install()}>
				<div className="card waves-effect" style={{
					overflow: "hidden",
					margin: "4px 4px 0",
					width: "calc(100% - 8px)",
					height: "122px"
				}}>
					<div className="padding-layer" style={{
						  padding: "16px 20px 12px"
					}}>
						<div className="external-img" style={{
							width: "44px",
							height: "44px",
							borderRadius: "50%",
							float: "left",
							marginBottom: "16px",
							marginRight: "20px",
							position: "relative"
						}}>
							<img src="https://fonts.gstatic.com/s/i/materialicons/system_update_alt/v7/24px.svg" alt="" style={{
							  position: "absolute",
							  maxWidth: "36px",
							  top: "50%",
							  left: "50%",
							  transform: "translate(-50%,-50%)"
							}}/>
						</div>
						<div className="title" style={{
						  display: "inline-block",
						  fontFamily: "Roboto",
						  fontSize: "15px",
						  fontWeight: "500",
						  overflowX: "hidden",
						  whiteSpace: "nowrap",
						  textOverflow: "ellipsis"
						}}>Add to homescreen</div>
						<p style={{
						  display: "block",
						  fontFamily: "Roboto",
						  fontSize: "14px",
						  overflow: "hidden",
						  height: "34px",
						  textOverflow: "ellipsis",
						  margin: "8px 0",
						  padding: "0",
						  opacity: ".78",
					  }}>{this.props.children}</p>
						<div className="ref" style={{
						  display: "inline-block",
						  fontFamily: "Roboto",
						  fontSize: 13,
						  fontWeight: 500,
						  overflow: "hidden",
						  height: 34,
						  textOverflow: "ellipsis",
						  margin: "8px 0",
						  transform: "translateY(-8px)",
						  left: 0,
						  padding: 0
					  }}>Web App Installer</div>
					</div>
				</div>
				</div>;
			} else {
				return this.props.children;
			}
		} else {
			return null
		}
	}
}

export default WebInstaller;
