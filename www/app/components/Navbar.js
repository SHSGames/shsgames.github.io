import React from "react";

export default class Navbar extends React.Component {
	componentDidMount() {
		setTimeout(() => Photon.reload());
	}

	render() {
		return (
			<div className={`toolbar paper${this.props.tabs && " tall" || ""}`}>
				<i className="material-icons waves-effect waves-ink" onClick={ () => $("#sn-webview").sidenav("open") }>menu</i>
				<div className="title">{this.props.children ? this.props.children : app["NAME"]}</div>
				{this.props.tabs && this.props.tabs()}
			</div>
		)
	}
}
