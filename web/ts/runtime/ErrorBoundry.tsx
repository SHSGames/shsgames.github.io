/* eslint @typescript-eslint/no-var-requires: off */
import Photon from "photoncss";
import { Button, Snackbar, ThemeProvider } from "photoncss/lib/react";
import React, { Component, ErrorInfo, ReactNode } from "react";
import { client as buildId } from "runtime/util/offlineInstaller";

export type Props = { children?: ReactNode };
export type State = { hasError: boolean, error?: Error };
export default class ErrorBoundary extends Component<Props, State> {

	// Create component superclass
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	// Static method to get the error
	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	async componentDidCatch(error: Error, errorInfo: ErrorInfo): Promise<void> {

		// Show snackbar
		Photon.Snackbar(
			<ThemeProvider>
				<Snackbar style={{
					borderLeft: "4px solid var(--palette_error)"
				}}>
					<p>A critical error has occured and {APP_MANIFEST.name} has crashed. { PRODUCTION && "This page will reload as soon as the error report is sent." }</p>
					{ PRODUCTION ? <>
						<Button variant="flat" color="primary" onClick={() => location.reload()}>Reload now</Button>
					</> : <>
						<hr style={{ margin: 0, borderColor: "#fff1" }}/>
						<p>{ error.toString() }</p>
					</> }
				</Snackbar>
			</ThemeProvider>
		);

		// SIf its in production...
		if (!PRODUCTION) return;

		// Send error report
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

		// Hard reload page
		location.reload();

	}

	// Render the children
	render(): React.ReactNode | null {
		if (this.state.hasError) return null;
		return this.props.children || null;
	}

}
