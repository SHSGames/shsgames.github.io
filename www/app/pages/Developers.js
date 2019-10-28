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
						<p>Our goal is to create a community of developers around the world.  We value the diversity that everyone has to offer. Having many people with different programming backgrounds on a team makes the product as complete as possible. Having people like you to contribute to ideas and development methods is every software teams dream. Why not join the team.</p>

						<div className="title"><h2>How to join</h2></div>
						<p>All you need to join the development team is join the Discord server. Then ask an admin to become a developer. An admin will dm you asking you for details like your GitHub, add you to the GitHub team and give you the Developer role in the discord.</p>
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
