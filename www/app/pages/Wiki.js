import React from "react";
import { Link } from "react-router-dom";

import README from "../../../README.md";
import APP_MD from "../../../wiki/App.md";
import GAME_MD from "../../../wiki/Game.md";
import REDIRECTABLE_MD from "../../../wiki/Redirectable.md";

const WIKI = {
	"App.md": { src: APP_MD },
	"Game.md": { src: GAME_MD },
	"Redirectable.md": { src: REDIRECTABLE_MD }
}

console.log(WIKI)

import Body from "../components/Body";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Markdown from "../components/Markdown";

const WikiLink = props => (
	<Link to={props.to} onClick={() => props.owner.refreshState()}>
		<div className="wikilink waves-effect">
			<i className="material-icons">book</i>
			<span>{props.children}</span>
		</div>
	</Link>
)

class Wiki extends React.Component {
	constructor() {
		super();
		this.state = {
			name: null,
			page: null,
			home: null
		};

		this.refreshState = this.refreshState.bind(this);
	}

	componentDidMount() {
		this.refreshState();
	}

	refreshState() {
		setTimeout(() => {
			this.setState({
				name: location.pathname.split("/wiki/")[1] + ".md",
				page: WIKI[location.pathname.split("/wiki/")[1] + ".md"],
				home: location.pathname === "/developers/wiki" || location.pathname === "/developers/wiki/"
			});
		})
	}

	render() {
		if(this.state.page === null) return null;
		return (
			<div>
				<Navbar/>
				<Body>
					<div className="row container">
						<div className="col s12 l3">
							<div style={{ marginTop: 8 }}>
								<WikiLink to="/developers/wiki" owner={this}>README.md</WikiLink>
								<div className="title"><h2>Pages</h2></div>
								{ Object.keys(WIKI).map((val,key) => <WikiLink owner={this} key={key} to={`/developers/wiki/${val.split(".")[0]}`}>{val}</WikiLink> ) }
							</div>
						</div>
						<div className="col s12 l9">
							<div className="card-panel md-wrapper">
								<div className="md-header">{this.state.home ? "README.md" : this.state.name}</div>
								<Markdown>{this.state.home ? README : this.state.page.src}</Markdown>
							</div>
						</div>
					</div>
				</Body>
				<Footer/>
			</div>
		);
	}
}

export default Wiki;
