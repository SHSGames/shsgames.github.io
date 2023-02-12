/* eslint-disable max-classes-per-file */
/* eslint consistent-this: off */
/* eslint @typescript-eslint/no-this-alias: off */
import "photoncss/dist/photon.css";
import { guid } from "photoncss/lib";
import { Button, Card, CardActions } from "photoncss/lib/react";
import React, { Component } from "react";
import { base } from "../../../manifest.json";
import "./style.less";

interface BeforeInstallPromptEvent extends Event {
  	readonly platforms: Array<string>;
  	readonly userChoice: Promise<{ outcome: "accepted" | "dismissed", platform: string }>;
  	prompt(): Promise<void>;
}

type Props = {
	title?: string;
	name?: string;
	description?: string;
}

let installer: BeforeInstallPromptEvent | null = null;
window.addEventListener("beforeinstallprompt", event => {
	event.preventDefault();
	installer = event as BeforeInstallPromptEvent;
});

interface InstallerProps extends Props { installer: () => void }

let didShow = false;

class Installer extends Component<InstallerProps, any> {

	id = guid();

	componentDidMount(): void {
		requestAnimationFrame(() => {
			if (localStorage.getItem("pwa-install-react--rejected") === "true") return;
			this.show();
		});
	}

	show(): void {
		if (didShow) return;
		document.getElementById(this.id)
			?.classList
			.remove("hidden");
		didShow = true;
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
					<img src={ base + "icon.png" } alt=""/>
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

export default class PWAInstaller extends Component<Props, { ready: boolean }> {

	_mounted = false;

	state = { ready: false };

	constructor(props: Props) {
		super(props);
		let _cache = null;
		const _this = this;
		(function listen(){
			requestAnimationFrame(listen);
			if (installer !== _cache && _this._mounted) {
				_cache = installer;
				_this.setState({ ready: installer !== null });
			}
		}());
	}

	componentDidMount(): void {
		this._mounted = true;
	}

	componentWillUnmount(): void {
		this._mounted = false;
	}

	install(): void {
		if (installer === null) return;
		installer.userChoice.then(result => {
			if (result.outcome === "accepted") installer = null;
		});
		installer.prompt();
	}

	render(): JSX.Element | null {
		if (this.state.ready === false) return null;
		return <Installer {...this.props} installer={() => this.install()}/>;
	}
}
