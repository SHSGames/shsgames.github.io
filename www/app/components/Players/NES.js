import React from "react";

class NESPlayer extends React.Component {
	constructor(props){
		super(props);

		this._arguments = props.game.params.options;
		$("body").append(`<script src="//cdn.jsdelivr.net/gh/SHSGames/SHSGames/www/src/js/jsnes.min.js" class="router-reset"></script>`)
	}

	componentDidMount() {
		app.game = this.props.game;

		const load = () => {
			nes_load_url("jsnes-game", `//cdn.jsdelivr.net/gh/JoshMerlino/shsg-pfile/games/${app.slug(this.props.game.name)}.nes`);
			(function resize(){
				requestAnimationFrame(resize);
				$("#jsnes-game").css("transform", `scale(${$("#nes-player").width()/$("#jsnes-game").width()})`);
			}())

			Photon.disableArrowKeyScrolling = true;
		}

		(function test(){
			window.hasOwnProperty("jsnes") ? (function(){
				$("body").append(`<script src="//cdn.jsdelivr.net/gh/SHSGames/SHSGames/www/src/js/jsnesplayer.js" class="router-reset"></script>`)
				(function test(){
					window.hasOwnProperty("nes_load_url") ? load() : setTimeout(test);
				}())
			}()) : setTimeout(test);
		}())
	}

	render() {
		return (
			<div id="nes-player" style={{ width: "100%", height: "100%", margin: "auto" }}>
				<canvas id="jsnes-game" width="256" height="240"></canvas>
			</div>
		);
	}
}

export default NESPlayer;
