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
		const { game } = this.props;
		$(".sidenav").children("li").children("a.active").removeClass("active");
		if(this.state.redirect) return <Redirect to={this.state.redirect} push/>;
		return <li><a onClick={ () => { $("#sn-webview").sidenav("close"); app.launch(this.props.game, this); } } className={`waves-effect${(app.slug(game.name) === location.pathname.split("g/")[1] || app.hash(app.slug(game.name)) === location.pathname.split("g/")[1]) ? " active":" "}`} >{this.props.game.name}</a></li>
	}
}

class Sidenav extends React.Component {
	render() {
		return (
			<ul id="sn-webview" className="sidenav" style={{ margin: 0, padding: 0 }}>
				<li><img src="/img/banner.png" alt=""/></li><br/>
				<li><Link onClick={ () => $("#sn-webview").sidenav("close") } className="waves-effect" to="/"><i className="material-icons">home</i>Home</Link></li>
				<li><Link onClick={ () => $("#sn-webview").sidenav("close") } className="waves-effect" to="/request"><i className="material-icons">add_to_queue</i>Game Request</Link></li>
				<li><a onClick={ () => $("#settings-view").addClass("active") } className="waves-effect"><i className="material-icons">settings</i>Settings</a></li>
				<li className="divider"></li>
				<li><a className="subheader">Games <span className="badge accent">{app.getGames().length}</span></a></li>
				{ app.getGames().map((game,key) => <ExitLink key={key} game={game}/>) }
			</ul>
		);
	}
}

export default Sidenav;
