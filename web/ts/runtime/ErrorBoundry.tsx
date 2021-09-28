/* eslint @typescript-eslint/no-var-requires: off */
import Photon from "photoncss";
import { Snackbar } from "photoncss/lib/react";
import React, { Component, ErrorInfo } from "react";

export type Props = any;
export type State = { hasError: boolean, error?: Error };
export default class ErrorBoundary extends Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	async componentDidCatch(error: Error, errorInfo: ErrorInfo): Promise<void> {
		Photon.Snackbar(
			<Snackbar>
				<p>A critical error has occured and { APP_MANIFEST.name } has crashed. This page will reload as soon as the error report is sent.</p>
			</Snackbar>
		);

		const buildId: string = require("raw-loader!../../../../hash").default;

		await fetch("//joshm.us.to/api/v1/report", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				error: error.toString(),
				errorInfo,
				buildId,
				location,
				app: APP_MANIFEST
			})
		});

		location.reload();

	}

	render(): React.ReactNode {
		if (this.state.hasError) return null;
		return this.props.children;
	}

}
