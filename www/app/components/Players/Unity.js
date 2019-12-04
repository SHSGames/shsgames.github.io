import React from "react";

class UnityPlayer extends React.Component {
	constructor(props){
		super(props);

		this._arguments = props.game.params.options;
		$("body").append(`<script src="/src/js/unity.min.js" class="router-reset"></script>`)
		$("body").append(`<script src="/src/js/unity-loader.min.js" class="router-reset"></script>`)

		this._progress = 0;
		this._loader = new Photon.dialog({
			type: "progress",
			message: "Downloading game files...",
			assets: 100,
		});

		this._loader.open();
	}

	componentDidMount() {
		let _this = this;
		app.game = this.props.game;
		this._unity = UnityLoader.instantiate("unity-player", `${app.service}/gcp/games/${this.props.game.params.unityImage}.json`, {
			onProgress: (_, progress) => {
				progress = Math.floor(progress * 100);
				_this._loader.increment(progress - _this._progress)
				_this._progress = progress;

				if(progress === 100) {
					_this._loader = new Photon.dialog({
						type: "progress",
						message: "Compiling game",
						circular: true
					});
					_this._loader.open();
				}
			},
      	    Module: {
				onRuntimeInitialized() {
	  	            _this._loader.resolved = true;
	  	            _this._loader.destroy();
      	    	}
			}
      	});
	}

	render() {
		return (
			<div id="unity-player" style={{ width: "100%", height: "100%", margin: "auto" }}></div>
		);
	}
}

export default UnityPlayer;
