import { Button, Card, CardActions, CardTitle, Col } from "photoncss/lib/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Game } from "../../games";
import { getGameID, slug } from "../util/gameHash";
import Star from "./Star";

export type Props = { game: Game };
export default function GameCard({ game }: Props): JSX.Element {

	return (
		<Col md={6} lg={4} xl={3}>
			<Card variant="outlined">
				<CardTitle>
					{ game.name.replace(/\s/g, "").length > 16 ? <Marquee speed={96}>{ game.name }</Marquee> : <>{ game.name }</>}
				</CardTitle>
				<div
				  	className="thumbnail"
				  	style={{
						margin: "-12px 0",
					  	paddingTop: "56.25%",
					  	position: "relative",
						overflow: "hidden"
					}}>
					<LazyLoadImage
						src={ game.thumbnail }
						alt=""
						style={{
							pointerEvents: "none",
							position: "absolute",
							height: "100%",
							width: "100%",
							top: 0,
							right: 0,
							bottom: 0,
							left: "50%",
							transform: "translateX(-50%)"
						}}/>
				</div>
				<CardActions seperated={true} direction="right">
					<Link to={`/g/${getGameID(game)}/${slug(game.name)}${location.search}`}>
						<Button
							color="primary"
							variant="outlined">Play</Button>
					</Link>
					<Star game={game}/>
				</CardActions>
			</Card>
		</Col>
	);
}
