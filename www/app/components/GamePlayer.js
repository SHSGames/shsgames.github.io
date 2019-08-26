import React from "react";

import FlashPlayer from "./Players/Flash";
import GBAPlayer from "./Players/GBA";
import NESPlayer from "./Players/NES";
import SNESPlayer from "./Players/SNES";
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
				{ this.props.game.engine === "flash" && (
					<div className="note warning">
						<div className="header"></div>
						<div className="content">Flash will no longer be supported in all web browsers in December of 2020. This means that after that date, all of the flash games on here (including this one) will be removed.</div>
						<hr/>
						<div className="content"><a href="https://www.rystedtcreative.com/tech-talks/flash-dead/">https://www.rystedtcreative.com/tech-talks/flash-dead/</a></div>
					</div>
				)}
				<div className="game">
					{ this.props.game.engine === "flash" && <FlashPlayer game={this.props.game}/> }
					{ this.props.game.engine === "unity" && <UnityPlayer game={this.props.game}/> }
					{ this.props.game.engine === "nes" && <NESPlayer game={this.props.game}/> }
					{ this.props.game.engine === "snes" && <SNESPlayer game={this.props.game}/> }
					{ this.props.game.engine === "gba" && <GBAPlayer game={this.props.game}/> }
				</div>
				<GameControls engine={this.props.game.engine}/>
			</div>
		);
	}
}

export default GamePlayer;
