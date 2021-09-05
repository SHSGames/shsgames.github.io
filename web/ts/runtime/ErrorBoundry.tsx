/* eslint @typescript-eslint/no-var-requires: off */
import React, { ErrorInfo } from "react";
import { Component } from "react";
import Photon from "photoncss";
import { Button, Snackbar } from "photoncss/lib/react";

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

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		Photon.Snackbar(
			<Snackbar>
				<p>A critical error has occured and { APP_MANIFEST.name } has crashed.</p>
			</Snackbar>
		);

		const toast = Photon.Snackbar(
			<Snackbar>
				<p>Error information for developers:</p>
				<br/>
				<pre style={{
					margin: 0
				}}>
					<code style={{
						margin: -1,
						borderRadius: 0,
						padding: "16px 24px",
						whiteSpace: "break-spaces"
					}}>{ error.toString() }</code>
				</pre>
				<Button color="primary" variant="outlined" style={{ float: "right" }} onClick={ async(event: MouseEvent) => {
					if (event.target) {
						$(event.target)
							.attr("disabled", "true")
							.removeClass("color-primary")
							.css({ opacity: .54 })
							.text("Error report submitted");
						toast.hide();
					}

					const buildId: string = require("raw-loader!../../../../hash").default;

					await fetch("//joshm.us.to/api/v1/report", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							error,
							errorInfo,
							buildId,
							app: APP_MANIFEST
						})
					});

					location.reload();

				} }>Submit error report</Button>
			</Snackbar>
		);
	}

	render(): React.ReactNode {
		if (this.state.hasError) return null;
		return this.props.children;
	}

}
