import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Request extends React.Component {
	constructor() {
		super();

		this._hrefs = ["https://docs.google.com/forms/d/e/1FAIpQLScD0hNLHtaxyiwUtUKHBxxJAKkuAgytpjHvdd6eHESOXCNH4w/viewform?embedded=true", "https://docs.google.com/forms/d/e/1FAIpQLSe3iNjW7GjNa9gYzHQBbQrIYKrTrU4cojsLamjePURqkKHdtw/viewform?embedded=true"]
		this.state = { i: 0 };
	}

	render() {
		return (
			<div>
				<Navbar/>
				<div className="container" style={{ maxWidth: 512 }}>
					<div className="title"><h2>Request</h2></div>
					{this.state.i + 1 !== this._hrefs.length && <p>Dont have access? Click <a onClick={() => this.setState({ i: this.state.i +1 })} className="primary-text" style={{ cursor: "pointer" }}>here</a>.</p>}
					<iframe src={this._hrefs[this.state.i]} width="500" height="620" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Request;
