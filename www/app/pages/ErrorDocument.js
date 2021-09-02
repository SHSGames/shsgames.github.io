import React from "react";
import { Link } from "react-router-dom";

class ErrorDocument extends React.Component {
	render() {
		return (
			<div className="og-vh-center">
				<center>
					<img src="/img/icon/web_hi_res_512.png" alt="" width="168"/>
					<br/>
					<h1>404 - Not found</h1>
					<h2>Was it a broken link or deleted???</h2>
					<div>
						<Link to="/"><div className="btn raised waves-effect primary">home</div></Link>
					</div>
				</center>
			</div>
		);
	}
}

export default ErrorDocument;
