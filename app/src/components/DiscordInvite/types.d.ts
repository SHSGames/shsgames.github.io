declare type ColorScheme = "light" | "dark";

declare interface Props {
	palette: ColorScheme;
	guild: string;
}

declare interface APIResponse {
    success: boolean;
	status?: string;
	error?: string;
    name: string;
    owner: string;
    verified: boolean;
    region: string,
    id: string;
    memberCount: number;
    memberOnline: number;
    bannerURL: null,
    iconURL: string;
    inviteCodes: string[];
}

declare interface Palette {
	background: string;
	header: string;
	subheader: string;
	name: string;
	inactive: string;
	active: string;
	button: string;
}
