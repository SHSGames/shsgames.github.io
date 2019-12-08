import React from "react";

import Body from "../components/Body";
import Footer from "../components/Footer";
import Adview from "../components/Adview";
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
		this.state = { games: [], num: 0, alts: [ "https://shsgames.herokuapp.com", "https://shs-games.herokuapp.com", "https://shsg.biz.tm", "https://shs-gg.biz.tm", "https://shs-gg.my.to" ] };
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
			<React.Fragment>
				<Navbar/>
				<Body>
					<div className="container row">
						<div className="col l6 only-on-large">
							<Adview
							  style={{ display: "block", marginRight: 24 }}
							  height={240}
							  data-ad-client="ca-pub-6128732932572955"
							  data-ad-slot="9050348534"
							  data-ad-format="auto"
							  data-full-width-responsive="true"/>
						</div>
						<div className="col s12 l6 row">
							<div className="col s12 m6">
								<ul className="scrollnav alt-mode" data-offset="0">
									<li><h1>Categories</h1></li>
									{ this.state.games.length !== 0 && this.state.games.groups.map((group, key) => <li key={key}><a data-scrollto={"#" + app.slug(group.name)}>{group.name}</a></li>) }
								</ul>
							</div>
							<div className="col s12 m6">
								<RandomGame>
									<a style={{ margin: 0, marginBottom: 8 }} className="autolink waves-effect photon-init">
										<div className="padding-layer">
											<div className="external-img invert">
												<img src="/img/res/shuffle-24px.svg" alt=""/>
											</div>
											<div className="title">Random Game</div>
											<p>Why not switch it up a bit?</p>
											<div className="ref">From {this.state.num} games</div>
										</div>
									</a>
								</RandomGame>
							</div>
							<div className="note important">
								<div className="header"></div>
								<div className="content"><b>Dont forget: Unblocked versions can be found here</b></div><hr/>
								{ this.state.alts.map((a,k) => location.origin !== a && <div className="content" key={k}><a href={a}>{a}</a></div>)}
							</div>
						</div>
						<div className="col s12">
							<Searchbar/>
							{ this.state.games.length !== 0 && this.state.games.groups.map((group, key) => <GameGroup key={key} pkey={key} group={group}/>) }
						</div>
					</div>
				</Body>
				<Footer static/>
			</React.Fragment>
		)
	}
}
