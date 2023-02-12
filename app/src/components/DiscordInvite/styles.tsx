/* eslint no-use-before-define: off */
/* eslint no-undef: off */

import React, { CSSProperties } from "react";

export function colors(palette: ColorScheme): Palette {

	if (palette === "light") return {
		background: "#f2f3f5",
		header: "#4f5660",
		subheader: "#747e8c",
		name: "#060607",
		inactive: "#c7ccd0",
		active: "#5aa363",
		button: "#5aa363"
	};

	return {
		background: "#2f3136",
		header: "#b9bbbe",
		subheader: "#b9bbbe",
		name: "#ffffff",
		inactive: "#747f8d",
		active: "#3ba55c",
		button: "#3ba55c"
	};

}

export function styles({ palette }: { palette: ColorScheme }): Record<string, CSSProperties> {

	// Get color scheme from props
	const scheme = colors(palette);

	return {

		"root": {
			backgroundColor: scheme.background,
			userSelect: "none",
			boxSizing: "border-box",
			display: "inline-block",
			borderRadius: "4px",
			padding: "16px",
			minHeight: "109px",
			width: "432px"
		},

		"title": {
			color: scheme.header,
			whiteSpace: "nowrap",
			textOverflow: "ellipsis",
			overflow: "hidden",
			fontFamily: "Uni Sans Heavy CAPS",
			textTransform: "uppercase",
			textRendering: "optimizeLegibility",
			margin: "0px",
			marginBottom: "12px",
			fontWeight: 500,
			fontSize: "13px"
		},

		"body": {
			display: "flex",
			flexFlow: "row nowrap"
		},

		"icon": {
			position: "relative",
			backgroundClip: "padding-box",
			backgroundColor: "none",
			backgroundPosition: "50%",
			backgroundSize: "100% auto",
			backgroundRepeat: "no-repeat",
			borderRadius: "15px",
			height: "50px",
			width: "50px",
			marginRight: "16px",
			flex: "0 0 auto"
		},

		"name": {
			color: scheme.name,
			margin: "0px",
			padding: "0px",
			border: "0px",
			fontWeight: 600,
			fontStyle: "inherit",
			fontFamily: "Google Sans, Whitney, Helvetica Neue, Helvetica, Arial, sans-serif",
			fontSize: "14px",
			verticalAlign: "baseline",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis",
			overflow: "hidden",
			marginBottom: "2px",
			cursor: "pointer",
			display: "flex",
			flex: "1 1 auto",
			minWidth: "0px",
			lineHeight: "30px"
		},

		"memberCount": {
			color: scheme.subheader,
			flex: "0 1 auto",
		    whiteSpace: "nowrap",
		    textOverflow: "ellipsis",
		    overflow: "hidden",
		    margin: "0px",
		    padding: "0px",
		    border: "0px",
		    fontSize: "14px",
		    verticalAlign: "top",
		    lineHeight: "8px",
		    fontWeight: 600,
		    fontFamily: "Arial, sans-serif"
		},

		"memberCountDisplay": {
			marginLeft: "12px",
			marginRight: "8px",
			position: "relative"
		},

		"joinLink": {
			height: "40px",
			paddingLeft: "20px",
			paddingRight: "20px",
			alignSelf: "center",
			marginLeft: "auto",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis",
			overflow: "hidden",
			flex: "0 0 auto",
			border: "none",
			boxSizing: "border-box",
			userSelect: "none",
			borderRadius: "3px",
			fontSize: "14px",
			fontWeight: 600,
			color: "#fff",
			backgroundColor: scheme.button,
			outline: "none",
			fontFamily: "Whitney,Helvetica Neue,Helvetica,Arial,sans-serif",
			textDecoration: "none",
			lineHeight: "38px",
			verticalAlign: "baseline",
			position: "relative",
			cursor: "pointer"
		},

		"error": {
			color: "#ed4244"
		},

		"blurple": {
			backgroundColor: "#5865f2"
		}

	};
}

export function CStyleSheet({ scheme }: { scheme: Palette }): JSX.Element {
	return (
		<style>{`

			@font-face {
			  	font-family: "Uni Sans Heavy CAPS";
			  	src: url(https://cdn.jsdelivr.net/gh/JoshMerlino/photoncss/fonts/UniSansHeavyCaps/3029259ef4f4389d799fe57da6f29158.woff2) format("woff2");
			}

			@font-face {
			  	font-family: 'Google Sans';
			  	src: url(https://cdn.jsdelivr.net/gh/JoshMerlino/photoncss/fonts/Google_Sans/pxicypQkot1TnFhsFMOfGShd5PSbS2lBkm8.woff2) format('woff2');
			}

			.DiscordInvite-badge::before {
				position: absolute;
				height: 8px;
				left: -12px;
				width: 8px;
				border-radius: 50%;
				content: "";
				background-color: ${scheme.inactive};
			}

			.DiscordInvite-badge:first-child::before {
				background-color: ${scheme.active};
			}

			@media only screen and (max-width: 600px) {
				.DiscordInvite-root {
					width: 354px!important;
				}
				.DiscordInvite-content {
					flex: none;
					width: calc(100% - 64px);
				}
				.DiscordInvite-joinLink {
					margin: 0;
					margin-top: 62px;
					margin-left: calc(-100% - 2px)!important;
					width: 100%;
					text-align: center;
					display: block!important;
				}
			}

		`}</style>
	);
}
