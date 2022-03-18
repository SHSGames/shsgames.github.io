import { Component, ErrorInfo, ReactNode } from "react";
import Manifest from "web-manifest-reader";

export type Props = { children?: ReactNode };
export type State = { hasError: boolean, error?: Error };
export default class ErrorBoundary extends Component<Props, State> {

	// Initialize state
	state: State = { hasError: false };

	// Create component superclass
	constructor(props: Props) {
		super(props);
	}

	// Static method to get the error
	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	async componentDidCatch(error: Error, errorInfo: ErrorInfo): Promise<void> {

		// If its in production...
		if (!PRODUCTION) {
			const ErrorOverlay = customElements.get("vite-error-overlay");
			if (!ErrorOverlay) return;
			const overlay = new ErrorOverlay(error);
			document.body.appendChild(overlay);
			return;
		}

		// Get web manifest
		const manifest = await Manifest.read();

		// Send error report
		await fetch("https://api.joshmerlino.me/v2/report", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				error: error.toString(),
				errorInfo,
				location,
				manifest
			})
		});

		// Hard reload page
		location.reload();

	}

	// Render the children
	render(): ReactNode | null {
		if (this.state.hasError) return null;
		return this.props.children || null;
	}

}
