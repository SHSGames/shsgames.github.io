import React from "react";
import { Link, Redirect } from "react-router-dom";

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

		let _this = this;
		let _cache = null;
		this._mounted = false;
		this.state = { games: [] };
		(function listen(){
			requestAnimationFrame(listen);
			if(app.games !== _cache && _this._mounted) {
				_cache = app.games;
				let games = [];
				app.games.groups.map(group => group.games.map(game => games.push(game)));
				games = games.sort((a,b) => a.name.localeCompare(b.name));
				_this.setState({ games });
			}
		}());
	}

	componentDidMount() {
		this._mounted = true;
	}

	componentWillUnmount() {
		this._mounted = false;
	}

	render() {
		return (
			<ul id="sn-webview" className="sidenav" style={{ margin: 0, padding: 0 }}>
				<li><img src="/img/icon/web_hi_res_512.png" alt="" style={{ padding: "1rem 25%" }} width="50%"/></li>
				<li className="divider"></li>
				<li><Link onClick={ () => $("#sn-webview").sidenav("close") } className="waves-effect" to="/"><i className="material-icons">home</i>Home</Link></li>
				<li><Link onClick={ () => $("#sn-webview").sidenav("close") } className="waves-effect" to="/request"><i className="material-icons">help_outline</i>Game Request</Link></li>
				<li><a onClick={ () => $("#settings-view").addClass("active") } className="waves-effect"><i className="material-icons">settings</i>Settings</a></li>
				<li className="divider"></li>
				<li><a className="subheader">Games <span className="badge accent">{this.state.games.length}</span></a></li>
				{ this.state.games.map((game,key) => <ExitLink key={key} game={game}/>) }
			</ul>
		);
	}
}

export default Sidenav;
