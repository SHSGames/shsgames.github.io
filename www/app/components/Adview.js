import React from "react";

class Adview extends React.Component {
	componentDidMount() {
		try {
			(adsbygoogle = window.adsbygoogle || []).push({});
		} catch(e) {
			console.warn("Cant show ads");
		}
	}

	render() {
		return (
			<div style={{ background: "#52525210", borderRadius: 4, padding: 4, ...this.props.style, height: this.props.height || "auto" }}>
				<ins className="adsbygoogle" {...this.props}/>
			</div>
		);
	}
}

export default Adview;
