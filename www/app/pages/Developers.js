import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Request extends React.Component {
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

						<a href="https://github.com/SHSGames" target="_blank" class="autolink waves-effect photon-init">
							<div class="padding-layer">
								<div class="external-img invert">
									<img src="https://github.com/favicon.ico" alt=""/>
								</div>
								<div class="title">SHSGames · GitHub</div>
								<p>Browse SHSGames on GitHub</p>
								<div class="ref">Our GitHub</div>
							</div>
						</a>

						<a href="https://discord.gg/XBr5nzu" target="_blank" class="autolink waves-effect photon-init">
							<div class="padding-layer">
								<div class="external-img">
									<img src="/img/res/discord.png" alt=""/>
								</div>
								<div class="title">SHSGames · Discord</div>
								<p>Join SHSGames on Discord</p>
								<div class="ref">Our Discord Server</div>
							</div>
						</a>

					</div>
				</div>

				<Footer/>
			</div>
		);
	}
}

export default Request;
