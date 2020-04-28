import React from "react";

// Which path should this view render for
const route = "/";

import { Link } from "react-router-dom";
import { Button } from "@photoncss/Button";

const View = () =>
	<React.Fragment>
		<p>Current Route: {route}</p>
		<Link to="/route"><Button variant="raised" color="primary">GO TO ROUTE: /route</Button></Link>
	</React.Fragment>;

// Export View and route
export default { View, route }
