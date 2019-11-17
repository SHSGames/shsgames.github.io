import React from "react";
import { Link, Redirect } from "react-router-dom";

import IMG_ICON_WEB_HI_RES_512_PNG from "../../img/icon/web_hi_res_512.png";

class ExitLink extends React.Component {
	constructor() {
		super();
		this.state = { redirect: null }
	}

	componentDidUpdate() {
		this.state.redirect !== null && this.setState({ redirect: null });
	}

	render() {
		if(this.state.redirect) return <Redirect to={this.state.redirect} push/>;
		return <li><a onClick={ () => { $("#sn-webview").sidenav("close"); app.launch(this.props.game, this); } } className="waves-effect" >{this.props.game.name}</a></li>
	}
}

class Sidenav extends React.Component {
	constructor() {
		super();
		this.state = { games: app.getGames() };
	}

	render() {
		return (
			<ul id="sn-webview" className="sidenav" style={{ margin: 0, padding: 0 }}>
				<li><img src={IMG_ICON_WEB_HI_RES_512_PNG} alt="" style={{ padding: "1rem 25%" }} width="50%"/></li>
				<li className="divider"></li>
				<li><Link onClick={ () => $("#sn-webview").sidenav("close") } className="waves-effect" to="/"><i className="material-icons">home</i>Home</Link></li>
				<li><Link onClick={ () => $("#sn-webview").sidenav("close") } className="waves-effect" to="/request"><i className="material-icons">library_add</i>Game Request</Link></li>
				<li><a onClick={ () => $("#settings-view").addClass("active") } className="waves-effect"><i className="material-icons">settings</i>Settings</a></li>
				<li className="divider"></li>
				<li><a className="subheader">Games <span className="badge accent">{this.state.games.length}</span></a></li>
				{ this.state.games.map((game,key) => <ExitLink key={key} game={game}/>) }
			</ul>
		);
	}
}

export default Sidenav;
