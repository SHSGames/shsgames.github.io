/* eslint camelcase: off */
declare const PRODUCTION: boolean;

declare interface View {
	route: string;
	default: React.ComponentType;
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
declare const APP_CONFIG: any;
