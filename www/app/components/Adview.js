import React from "react";

class Adview extends React.Component {
	render() {
		return (
			<div style={{ background: "#52525210", borderRadius: 4, padding: 4, ...this.props.style, height: this.props.height || "auto" }}>
				<div style={{ display: "grid", height: "100%" }}>
					<div style={{ margin: "auto" }}>
						<div>
							<ins className="adsbygoogle" {...this.props}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Adview;
