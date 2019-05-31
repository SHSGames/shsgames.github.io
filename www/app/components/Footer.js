import React from "react";

import "./Footer.less";

export default class Footer extends React.Component {
	constructor() {
		super();
		this._phrases = ["part of an inside job", "for the brave", "im a professional", "im smart I sware", "I play rock climbing", "put some sleeves on", "I have the power of God and anime", "send toes"];
		this.state = { phrase: "" };
	}

	componentDidMount() {
		this.setState({ phrase: this._phrases[Math.floor(Math.random() * this._phrases.length)] });
	}

	render() {
		return (
			<div>
				<footer className={ this.props.static && "static" }>
					<div className="container">
						<div className="row">
							<div className="col s12 l8">
								<h3 className="grey-text text-lighten-3">{app["NAME"]}</h3>
								<p className="grey-text">Unblocked games • {this.state.phrase}.</p>
							</div>
						</div>
					</div>
					<div className="footer-copyright">
						<div className="container">
							Copyright © { new Date().getFullYear() }
							<a href="https://joshmerlino.herokuapp.com" className="primary-text"> Josh Merlino</a>
							<a href="https://th3skeleton.github.io/pshel/" className="primary-text"> Parker Sheldon</a>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
