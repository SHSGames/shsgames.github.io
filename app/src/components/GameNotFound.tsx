import { Button, Container, VHCenter } from "photoncss/lib/react";
import React from "react";
import { Link } from "react-router-dom";

export default function NoGameFound(): JSX.Element {
	return (
		<VHCenter>
			<Container style={{ maxWidth: 600 }}>
				<h1>404 - Not Found!</h1>
				<p>It looks like you found a broken link, or you didn't type the URL correctly.</p>
				<Link to={`/${location.search}`}>
					<Button color="primary" variant="raised">Browse Games</Button>
				</Link>
			</Container>
		</VHCenter>
	);
}
