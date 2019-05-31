import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Request extends React.Component {
	render() {
		return (
			<div>
				<Navbar/>
				<div className="container" style={{ maxWidth: 512 }}>
					<div className="title"><h2>Request</h2></div>
					<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScD0hNLHtaxyiwUtUKHBxxJAKkuAgytpjHvdd6eHESOXCNH4w/viewform?embedded=true" width="500" height="620" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>					
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Request;
