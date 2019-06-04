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
		this.state = { game: false, error: false };

		let found = false;
		this._incache = false;
		this._listener = function listen(){
			_this._mounted && requestAnimationFrame(listen);
			if((app.games !== _cache && _this._mounted) || (_pathname !== location.pathname)) {
				_pathname = location.pathname;
				_cache = app.games;

				let games = [];
				app.games.groups.map(group => group.games.map(game => games.push(game)));

				games.map(game => {
					if(app.slug(game.name) == location.pathname.split("game/")[1]) {
						_this.setState({ game });

						let savedgames = JSON.parse(localStorage.getItem("offline-games") || "[]");
						for (let g of savedgames) {
							if(g.name === game.name) incache = true;
						}

						if(!app.state.offline) {
							_this._incache === false && game.engine === "flash" && savedgames.push(game);
							_this._incache = true;
						}

						savedgames = savedgames.sort((a,b) => a.name.localeCompare(b.name));
						localStorage.setItem("offline-games", JSON.stringify(savedgames));

						found = true;
						document.title = `${game.name} - ${app["NAME"]}`
					}
				})

				if(found === false) {
					_this.setState({ error: true });
				}
			}
		};
	}

	componentDidMount() {
		this._mounted = true;
		this._listener();
	}

	componentWillUnmount() {
		this._mounted = false;
	}

	render() {
		if(this.state.error) return <ErrorDocument/>;
		if(app.state.offline && this.incache === false) return <div>offline</div>;
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
