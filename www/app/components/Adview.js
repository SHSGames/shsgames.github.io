import React from "react";

class Adview extends React.Component {
	constructor() {
		super();
		this.state = { visible: true };
	}

	componentDidMount() {
		try {
			(adsbygoogle = window.adsbygoogle || []).push({});
		} catch(e) {
			this.setState({ visible: false });
			console.warn("Ads not shown. Network does not support.")
		}
	}

	render() {
		return !this.state.visible ? null : (
			<ins className="adsbygoogle"
		      style={{ display: "block", marginTop: 8 }}
		      data-ad-format="fluid"
			  data-ad-layout-key="-g7-u+8l-8s-d3"
     		  data-ad-client="ca-pub-6128732932572955"
     		  data-ad-slot="8757072245"/>
		);
	}
}

export default Adview;
