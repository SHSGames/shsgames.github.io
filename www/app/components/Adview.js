import React from "react";

class Adview extends React.Component {
	constructor() {
		super();
		this.state = { visible: typeof window.adsbygoogle === "object" && window.adsbygoogle.hasOwnProperty("loaded") && window.adsbygoogle.loaded === true };
	}

	style = {
		borderRadius: 4,
		padding: 4
	}

	message = "We noticed you have some sort of ad blocker enabled. Ads like this are what keep this service free and running. We understand that some schools block ads and theres nothing you can do about it, in that case, tell all your friends from other schools to join."

	render() {
		setTimeout(Photon.reload)
		return !this.state.visible ? (
			<div style={{ background: "#52525210", ...this.style, ...this.props.style, height: this.props.height || "auto" }}>
				<div style={{ display: "grid", height: "100%" }}>
					<div style={{ margin: "auto" }}>
						<center>
							<div style={{ opacity: .54 }}>
								<i className="material-icons" style={{ fontSize: 64, display: "inline-block", padding: "16px 32px" }}>sentiment_dissatisfied</i>
								<div style={{ width: "80%", maxWidth: 600, textAlign: "left" }}>{this.message}</div>
							</div>
						</center>
					</div>
				</div>
			</div>
		) : (
			<div style={{ background: "#52525210", ...this.style, ...this.props.style, height: this.props.height || "auto" }}>
				<div style={{ display: "grid", height: "100%" }}>
					<div style={{ margin: "auto" }}>
						<ins className="adsbygoogle" {...this.props}/>
					</div>
				</div>
			</div>
		);
	}
}

export default Adview;
