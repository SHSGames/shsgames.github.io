import React from "react";

import Body from "../components/Body";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Request extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar/>
				<Body>
					<div className="container" style={{ maxWidth: 512 }}>
						<div className="title"><h2>Request</h2></div>
						<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYfBSNxPLPYS87V8F5H_srzNHeMyR0GQ-ronruWZs1FzGbfQ/viewform?embedded=true" width="640" height="1512" frameBorder="0" marginHeight="0" marginWidth="0" style={{ margin: "0 -26px" }}>Loading…</iframe>
					</div>
				</Body>
				<Footer/>
			</React.Fragment>
		);
	}
}

export default Request;
