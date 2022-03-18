/* eslint @typescript-eslint/no-explicit-any: off */
import React, { Component } from "react";
import { Button, Card, CardActions } from "photoncss/lib/react";
import "photoncss/dist/photon.css";
import "./style.less";
import { guid } from "photoncss/lib";

interface InstallerProps extends PWAProps { installer: () => void }
export default class Installer extends Component<InstallerProps, any> {

	id = guid();

	componentDidMount(): void {
		requestAnimationFrame(() => {
			if (localStorage.getItem("pwa-install-react--rejected") === "true") return;
			this.show();
		});
	}

	show(): void {
		document.getElementById(this.id)
			?.classList
			.remove("hidden");
	}

	hide(rejected = false): void {
		document.getElementById(this.id)
			?.classList
			.add("hidden");
		if (rejected) localStorage.setItem("pwa-install-react--rejected", "true");
	}

	render(): JSX.Element {
		return (
			<Card className="pwa-installer hidden" id={this.id}>
				<div className="pwa-installer-body">
					<img src="/icon.png" alt=""/>
					<div>
						<h3>{ this.props.title || "Install app?" }</h3>
						<p>
							<b>{ this.props.name || document.title }</b>
							<span>{ this.props.description || location.hostname }</span>
						</p>
					</div>
				</div>
				<CardActions direction="right">
					<Button variant="flat" onClick={() => this.hide(true)}>no thanks</Button>
					<Button variant="raised" color="primary" onClick={() => this.props.installer()}>install</Button>
				</CardActions>
			</Card>
		);
	}
}
