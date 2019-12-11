import React from "react";
import { renderToString } from "react-dom/server";

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
		this._mounted = false;
		this.state = { games: app.games, num: 0, alts: [ "https://shsgames.herokuapp.com", "https://shs-games.herokuapp.com", "https://shsg.biz.tm", "https://shs-gg.biz.tm", "https://shs-gg.my.to" ] };

		let num = 0;
		for (let group of app.games.groups) num += group.games.length;
		this.state.num = num;
		setTimeout(() => Photon.reload());

		this.showLinks = this.showLinks.bind(this);

	}

	componentDidMount() {
		this._mounted = true;
	}

	componentWillUnmount() {
		this._mounted = false;
	}

	showLinks() {
		const dialog = new Photon.dialog({
			type: "alert",
			title: "Backup Links",
			transition: "grow",
			message: renderToString(
				<div style={{ marginBottom: -22, marginTop: -16 }}>
					{this.state.alts.map((val, key) => val !== location.origin && (
						<a className="link waves-effect primary-text" key={key} href={val} target="_blank" style={{ margin: "0 -24px", padding: "0 24px", display: "block", height: 48 }}>
							<i className="material-icons" style={{ lineHeight: "48px", height: 48 }}>link</i>
							<span style={{ fontFamily: "Roboto Mono", transform: "translateY(-6px)", display: "inline-block", marginLeft: 16 }}>{val}</span>
						</a>
					))}
				</div>
			),
			actions: [{
				name: "okay",
				click() {
					dialog.destroy();
				}
			}]
		});

		dialog.open();
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
						<div className="col s12 l6">
							<ul className="scrollnav alt-mode" data-offset="0">
								<li><h1>Categories</h1></li>
								{ this.state.games.length !== 0 && this.state.games.groups.map((group, key) => <li key={key}><a data-scrollto={"#" + app.slug(group.name)}>{group.name}</a></li>) }
							</ul>
						</div>
						<div className="col s12">
							<br/>
							<RandomGame>
								<a style={{ margin: 0, marginBottom: 8 }} className="autolink waves-effect">
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
							<a style={{ margin: 0, marginBottom: 8, marginLeft: 8 }} className="autolink waves-effect" onClick={this.showLinks}>
								<div className="padding-layer">
									<div className="external-img invert">
										<img src="/img/res/link-24px.svg" alt=""/>
									</div>
									<div className="title">Backup Links</div>
									<p>Just in case it got blocked.</p>
									<div className="ref">Show {this.state.alts.length -1} other links</div>
								</div>
							</a>
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
