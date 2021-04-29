declare module "photoncss";
declare module "photoncss/react";

declare module "react-dom";
declare module "react-router-dom";

declare const PRODUCTION: boolean;

interface AppManifest {
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

interface App {
	static: (asset: string) => string;
	getRoute: () => string;
	api: (path: string, data = {}) => Promise<unknown>;
	update: (hash: string) => void;
}
