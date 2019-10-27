import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GameGroup from "../components/GameGroup";
import Searchbar from "../components/Searchbar";
import RandomGame from "../components/RandomGame";

export default class Home extends React.Component {
	constructor() {
		super();

		let _this = this;
		let _cache = null;
		this._mounted = false;
		this.state = { games: [], num: 0, alts: [ "https://shsgames.herokuapp.com", "https://shs-games.herokuapp.com" ] };
		(function listen(){
			requestAnimationFrame(listen);
			if(app.games !== _cache && _this._mounted) {
				_cache = app.games;
				let num = 0;
				for (let group of app.games.groups) num += group.games.length;
				_this.setState({ games: app.games, num });
				setTimeout(() => Photon.reload());
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
			<div>
				<Navbar/>

				<div className="container row">
					<div className="col s12 l7">
						<ul className="scrollnav" data-offset="0">
							<li><h1>Categories</h1></li>
							{ this.state.games.length !== 0 && this.state.games.groups.map((group, key) => <li key={key}><a data-scrollto={"#" + app.slug(group.name)}>{group.name}</a></li>) }
						</ul>
						<RandomGame>
							<a style={{ margin: 0 }} className="autolink waves-effect photon-init">
								<div className="padding-layer">
									<div className="external-img">
										<img src="/img/res/shuffle-24px.svg" alt=""/>
									</div>
									<div className="title">Random Game</div>
									<p>Why not switch it up a bit?</p>
									<div className="ref">Pick from {this.state.num} games</div>
								</div>
							</a>
						</RandomGame>
					</div>
					<div className="col s12 l5">
						<div className="note important">
							<div className="header"></div>
							<div className="content"><b>Dont forget: Unblocked versions can be found here</b></div><hr/>
							{ this.state.alts.map((a,k) => location.origin !== a && <div className="content" key={k}><a href={a}>{a}</a></div>)}
						</div>
					</div>
					<div className="col s12 l5">
						<div className="note partners">
							<div className="header"></div>
							<div className="content"><b>Check out our partners:</b></div><hr/>
							<div className="content">ALT+G: <i className="grey-text">Our Minecraft server with no rules!</i> <code style={{ padding: "2px 4px", borderRadius: 5}}>altg.biz.tm</code></div>
							<div className="content">DropChat: <i className="grey-text">Share special moments with friends!</i> <a href="https://dropchat.net" target="_blank">https://dropchat.net</a></div>
							<div className="content">Dankglonk: <i className="grey-text">The best meme account on Instagram!</i> <code style={{ padding: "2px 4px", borderRadius: 5}}>@dankglonk</code></div>
						</div>
					</div>
					<div className="col s12">
						<Searchbar/>
						{ this.state.games.length !== 0 && this.state.games.groups.map((group, key) => <GameGroup key={key} group={group}/>) }
					</div>
				</div>

				<Footer static/>
			</div>
		)
	}
}
