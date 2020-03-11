import React from "react";

import IMG_RES_DISCORD_PNG from "../../img/res/discord.png";

import "./Footer.less";

export default class Footer extends React.Component {
	constructor() {
		super();
		this._phrases = [
		  "part of an inside job",
		  "for the brave",
		  "im a professional",
		  "im smart I sware",
		  "I play rock climbing",
		  "put some sleeves on",
		  "I have the power of God and anime",
		  "send toes",
		  "Feel the wrath of the skinny man",
		  "Who ratted",
		  ".-...--.",
		  "@dankglonk is a GOAT!"
	  	];
		this.state = { phrase: "" };
	}

	componentDidMount() {
		this.setState({ phrase: this._phrases[Math.floor(Math.random() * this._phrases.length)] });
	}

	render() {
		return (
			<footer className="legacy dark" style={{ zIndex: 3 }}>
				<div className="container">
					<div className="row">
						<div className="col s12 l8">
							<h3 className="grey-text text-lighten-3">{app["NAME"]}</h3>
							<p className="grey-text">Unblocked games • {this.state.phrase}.</p>
						</div>
						<div className="col s12 l4">
							<a href="https://discord.gg/VkXcRAD" target="_blank" className="reference waves-effect photon--darktheme">
								<div className="padding-layer">
									<div className="external-img">
										<img src={IMG_RES_DISCORD_PNG} alt=""/>
									</div>
									<div className="title">SHSGames · Discord</div>
									<p>Join SHSGames on Discord</p>
									<div className="ref">Our Discord Server</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container grey-text text-lighten-1">
						Copyright © { new Date().getFullYear() }
						<a href="https://joshmerlino.github.io" className="white-text"> Josh Merlino</a> &
						<a href="https://th3skeleton.github.io/pshel/" className="white-text"> Parker Sheldon</a> &
						<a className="white-text"> George Lock</a>
					</div>
				</div>
			</footer>
		);
	}
}
