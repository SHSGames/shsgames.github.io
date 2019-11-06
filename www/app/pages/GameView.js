import React from "react";

import Body from "../components/Body";
import ErrorDocument from "./ErrorDocument";
import GamePlayer from "../components/GamePlayer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class GameView extends React.Component {
	constructor() {
		super();
		this.state = { game: false, error: false };
		this.resetState = this.resetState.bind(this);
		this._mounted = false;
		let _this = this;

		let cache = location.pathname;
		(function loop() {
			requestAnimationFrame(loop);
			if(_this._mounted && location.pathname !== cache) {
				cache = location.pathname;
				_this.resetState();
			}
		}())
	}

	componentDidMount() {
		this.resetState();
		this._mounted = true;
	}

	componentWillUnmount() {
		this._mounted = false;
	}

	resetState() {
		this.found = false;
		const games = app.getGames()
		games.map(game => {
			if(app.slug(game.name) == location.pathname.split("g/")[1] || app.hash(app.slug(game.name)) == location.pathname.split("g/")[1]) {
				this.found = true;
				this.setState({ game });
				document.title = `${game.name} - ${app["NAME"]}`
			}
		})
		this.found === false && this.setState({ error: true });
	}

	render() {
		if(this.state.error) return <ErrorDocument/>;
		return (
			<div data-num={this.state.num}>
				<Navbar/>
				<Body>
					{ this.state.game && <GamePlayer game={this.state.game}/> }
				</Body>
				<Footer static/>
			</div>
		);
	}
}

export default GameView;
