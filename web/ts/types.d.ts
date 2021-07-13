/* eslint camelcase: off */
declare const PRODUCTION: boolean;

declare interface View {
	route: string;
	View: JSX.Element;
	default: JSX.Element;
	title?: string;
}

declare interface AppManifest {
	name: string;
    short_name: string;
	version: string;
	description: string;
	developerName: string;
	developerURL: string;
	background_color: string;
	theme_color: string;
	orientation: string;
	crossorigin: string;
	icons: {
		src: string;
		sizes: number[];
		purpose?: string;
		destination: string;
	}[];
}

declare const APP_MANIFEST: AppManifest;

declare interface App {
	static: (asset: string) => string;
	getRoute: () => string;
	api: (path: string, data: unknown) => Promise<unknown>;
	update: (hash: string) => void;
}
