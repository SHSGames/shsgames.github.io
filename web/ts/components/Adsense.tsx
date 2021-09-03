import { Card } from "photoncss/lib/react";
import React, { CSSProperties, useEffect } from "react";

export type Props = {
	adLayout: "in-article";
	style: CSSProperties;
	adFormat: "fluid";
	fullWidthResponsive: "true" | "false";
}
export default function Adsense({ adLayout = "in-article", style, adFormat = "fluid", fullWidthResponsive = "true" }: Props): JSX.Element {

	useEffect(function() {
		/* eslint no-eval: off */
		eval("(adsbygoogle = window.adsbygoogle || []).push({});");
	}, []);

	return (
		<Card variant="outlined" style={{ overflow: "hidden" }}>
			<ins className="adsbygoogle"
				style={style}
				data-ad-client="ca-pub-6128732932572955"
				data-ad-slot="1159034500"
				data-ad-layout={adLayout}
				data-ad-format={adFormat}
				data-full-width-responsive={fullWidthResponsive}></ins>
		</Card>
	);
}
