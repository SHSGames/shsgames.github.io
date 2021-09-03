import { Card } from "photoncss/lib/react";
import React, { CSSProperties } from "react";
import GoogleAdsense from "react-adsense-google";

export type Props = {
	adLayout: "in-article";
	style: CSSProperties;
	adFormat: "fluid";
	fullWidthResponsive: "true" | "false";
}
export default function Adsense({ adLayout = "in-article", style, adFormat = "fluid", fullWidthResponsive = "true" }: Props): JSX.Element {
	return (
		<Card variant="outlined" style={{ overflow: "hidden" }}>
			<GoogleAdsense
				adClient="ca-pub-6128732932572955"
				adSlot="1159034500"
				style={style}
				adLayout={adLayout}
				adFormat={adFormat}
				fullWidthResponsive={fullWidthResponsive}
			/>
		</Card>
	);
}
