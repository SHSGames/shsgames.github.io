import React from "react";

import ErrorDocument from "./ErrorDocument";
import GamePlayer from "../components/GamePlayer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class GameView extends React.Component {
	constructor() {
		super();

		let _this = this;
		let _cache = null;
		let _pathname = location.pathname;
		this._mounted = false;
		this.state = { game: false, error: true };
		(function listen(){
			requestAnimationFrame(listen);
			if((app.games !== _cache && _this._mounted) || (_pathname !== location.pathname)) {
				_pathname = location.pathname;
				_cache = app.games;

				let games = [];
				app.games.groups.map(group => group.games.map(game => games.push(game)));

				games.map(game => {
					if(app.slug(game.name) == location.pathname.split("game/")[1]) {
						_this.setState({ game });
						_this.setState({ error: false });
						document.title = `${game.name} - ${app["NAME"]}`
					}

				})
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
		if(this.state.error) return <ErrorDocument/>;
		return (
			<div>
				<Navbar/>
				{ this.state.game && <GamePlayer game={this.state.game}/> }
				<Footer static/>
			</div>
		);
	}
}

export default GameView;
