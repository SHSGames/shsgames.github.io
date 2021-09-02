import { Col, Container, Footer, FooterCopyright, Row } from "photoncss/lib/react";
import React, { useEffect, useState } from "react";
import DiscordInvite from "react-discord-invite";
import { Link } from "react-router-dom";

export function MoTD(): JSX.Element | null {

	type State = { motd: string } | null;

	// Initialize state
	const [ state, setState ] = useState<State>(null);

	// Have state sync with server every second while component is mounted
	useEffect(function() {
		if (state === null) fetch("https://joshm.us.to/api/v1/motd").then(resp => resp.json())
			.then(setState);
	});

	// If loading
	if (state === null) return null;

	// Return motd
	return <p>{state!.motd}</p>;

}

export default function Component(): JSX.Element {
	return (
		<Footer>
			<Container>
				<Row>
					<Col lg={8}>
						<Link to="/">
							<div className="title">
								<h3>{ APP_MANIFEST.name }</h3>
							</div>
						</Link>
						<MoTD/>
					</Col>
					<Col lg={4}>
						<div className="raised-3" style={{ display: "inline-block", float: "right", margin: "16px 0" }}>
							<DiscordInvite guild="584437072618717209"/>
						</div>
					</Col>
				</Row>
			</Container>
			<FooterCopyright>
				<div style={{ paddingLeft: 8 }}>
					Copyright © 2019 - { (new Date).getFullYear() } <a href="//joshmerlino.github.io" className="link"> Josh Merlino</a> & <a href="https://th3skeleton.github.io/pshel/" className="link">Parker Sheldon</a> & George Lock
					<br/>
					All Rights Reserved
				</div>
			</FooterCopyright>
		</Footer>
	);
}
