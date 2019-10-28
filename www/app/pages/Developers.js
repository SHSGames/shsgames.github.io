import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Markdown from "../components/Markdown";

class Request extends React.Component {
	constructor() {
		super();
		this.state = { markdown: "" };
	}

	componentDidMount() {
		service("README")()(markdown => this.setState({ markdown }))
	}

	render() {
		return (
			<div>
				<Navbar>Become a Developer</Navbar>

				<div className="container row">
					<div className="col s12 m10 l8 xl6">
						<div className="title"><h2>Our Mission</h2></div>
						<p>Our goal is to create a diverse community of developers. We want as many unique ideas that we can get. Every developer has their own ways of doing things, there own signiture solution. We want as many as we can get brought to the table.</p>

						<div className="title"><h2>Become a Dev</h2></div>
						<p>Join our Discord server, then @ an admin and ask for developer access.</p>
					</div>

					<div className="col s12 l4 xl6">

						<div className="right">

							<a href="https://github.com/SHSGames" style={{ margin: "8px 0" }} target="_blank" className="autolink waves-effect photon-init">
								<div className="padding-layer">
									<div className="external-img invert">
										<img src="https://github.com/favicon.ico" alt=""/>
									</div>
									<div className="title">SHSGames · GitHub</div>
									<p>Browse SHSGames on GitHub</p>
									<div className="ref">Our GitHub</div>
								</div>
							</a>

							<br/>

							<a href="https://discord.gg/XBr5nzu" style={{ margin: "8px 0" }} target="_blank" className="autolink waves-effect photon-init">
								<div className="padding-layer">
									<div className="external-img">
										<img src="/img/res/discord.png" alt=""/>
									</div>
									<div className="title">SHSGames · Discord</div>
									<p>Join SHSGames on Discord</p>
									<div className="ref">Our Discord Server</div>
								</div>
							</a>

						</div>

					</div>

					<div className="col s12">
						<div className="card-panel md-wrapper">
							<div className="md-header">README.md</div>
							<Markdown>{this.state.markdown}</Markdown>
						</div>
					</div>
				</div>

				<Footer/>
			</div>
		);
	}
}

export default Request;
