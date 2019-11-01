import React from "react";

class UnityPlayer extends React.Component {
	constructor(props){
		super(props);

		this._arguments = props.game.params.options;
		$("body").append(`<script src="/src/js/unity.min.js" class="router-reset"></script>`)
		$("body").append(`<script src="/src/js/unity-loader.min.js" class="router-reset"></script>`)

		this._loader = new Photon.dialog({
			type:"progress",
			circular:true,
			message:"Loading Unity player..."
		});

		this._loader.open();
	}

	componentDidMount() {
		let _this = this;
		app.game = this.props.game;
		this._unity = UnityLoader.instantiate("unity-player", `${app.service}/gcp/games/${this.props.game.params.unityImage}.json`, {
      	    Module: { onRuntimeInitialized() {
  	            _this._loader.resolved = true;
  	            _this._loader.destroy();
      	    } }
      	});
	}

	render() {
		return (
			<div id="unity-player" style={{ width: "100%", height: "100%", margin: "auto" }}></div>
		);
	}
}

export default UnityPlayer;
