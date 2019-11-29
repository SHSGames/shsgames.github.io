import React from "react";
import { Redirect } from "react-router-dom";

import "./GameCard.less";

class GameCard extends React.Component {
	constructor() {
		super();
		this.state = { redirect: null }
	}

	componentDidMount() {
		setTimeout(() => new LazyLoad({ elements_selector: ".thumbnail" }))
	}

	componentDidUpdate() {
		this.state.redirect !== null && this.setState({ redirect: null });
	}

	render() {
		if(this.state.redirect) return <Redirect to={this.state.redirect} push/>;
		return (
			<div className="col s12 m6 l4 xl3">
				<div className="gamecard card">
					<div className="card-content">
						<div className="card-title">{this.props.game.name}</div>
						<div className="thumbnail-wrapper">
							<img data-src={`${app.service}/gcp/thumbs/${app.slug(this.props.game.name)}.jpg`} alt="" className="thumbnail"/>
						</div>
					</div>
					<div className="card-actions" style={{ textAlign: "right" }}>
						<a className="btn flat waves-effect primary" onClick={ () => app.launch(this.props.game, this) }>play</a>
					</div>
				</div>
			</div>
		);
	}
}

export default GameCard;
