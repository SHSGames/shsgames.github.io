import React from "react";

import FlashPlayer from "./Players/Flash";
import GBAPlayer from "./Players/GBA";
import NESPlayer from "./Players/NES";
import UnityPlayer from "./Players/Unity";

import GameControls from "./GameControls";
import "./GamePlayer.less";

class GamePlayer extends React.Component {
	componentDidMount() {
		let _this = this;
		(function resize(){
			requestAnimationFrame(resize);
			$(".game").height($(".game-view").width() * Math.pow(_this.props.game.params.aspectRatio || 4/3,-1))
		}());
	}

	render() {
		return (
			<div className="game-view" style={{ width: this.props.game.params.width }}>
				<div className="title"><h2>{this.props.game.name}</h2></div>
				<div className="game">
					{ this.props.game.engine === "flash" && <FlashPlayer game={this.props.game}/> }
					{ this.props.game.engine === "unity" && <UnityPlayer game={this.props.game}/> }
					{ this.props.game.engine === "nes" && <NESPlayer game={this.props.game}/> }
					{ this.props.game.engine === "gba" && <GBAPlayer game={this.props.game}/> }
				</div>
				<GameControls engine={this.props.game.engine}/>
			</div>
		);
	}
}

export default GamePlayer;
