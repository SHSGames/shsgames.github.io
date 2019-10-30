import React from "react";

import { SettingsCheckbox, SettingsHeader, SettingsSection, SettingsOption, SettingsIcon, SettingsName } from "./SettingsItem";

class SettingsView extends React.Component {
	constructor() {
		super();
		this._mounted = false;

		this._guid = Photon.guid();
		this.state = { flat: true };

		let _this = this;
		(function observe() {
			requestAnimationFrame(observe);
			if(_this._mounted) {
				_this.setState({ flat: $(`#${_this._guid}`)[0].scrollTop === 0 });
			}
		}());
	}

	componentDidMount() {
		this._mounted = true;
		Photon.reload();
	}

	componentWillUnmount() {
		this._mounted = false;
	}

	render() {
		return (
			<div className="settings-view-wrapper" id="settings-view">
				<div className="settings-view">
					<div className={`toolbar ${this.state.flat ? "flat" : "raised"} white grey-text text-darken-3`}>
						<i className="material-icons waves-effect waves-ink waves-classic" onClick={ () => $("#settings-view").removeClass("active") }>close</i>
						<div className="title" style={{ userSelect: "none" }}>Settings</div>
					</div>
					<div className="content" id={this._guid}>

						<SettingsSection>
							<SettingsHeader>Appearance</SettingsHeader>
							<SettingsOption>
								<SettingsIcon icon="brightness_4"/>
								<SettingsName name="Night mode"/>
								<SettingsCheckbox value={ localStorage.getItem("darkmode") === "true" } onChange={ value => { localStorage.setItem("darkmode",value.toString()); app.setDarkMode(value) } }/>
							</SettingsOption>
						</SettingsSection>
						<SettingsSection>
							<SettingsHeader>Application</SettingsHeader>
							<SettingsOption>
								<SettingsIcon icon="error_outline"/>
								<SettingsName name="Warn about volume"/>
								<SettingsCheckbox value={ localStorage.getItem("hidewarn") !== "true" } onChange={ value => localStorage.setItem("hidewarn",(!value).toString()) }/>
							</SettingsOption>
							<SettingsOption onClick={ app.update }>
								<SettingsIcon icon="cached"/>
								<SettingsName name="Clean cache"/>
							</SettingsOption>
						</SettingsSection>
						<SettingsSection>
							<SettingsHeader>Unblocking Methods</SettingsHeader>
							<SettingsOption altMessage="Encrypts the URL so blockers think its a random website">
								<SettingsIcon icon="lock_outline"/>
								<SettingsName name="Encrypted Games"/>
								<SettingsCheckbox value={ localStorage.getItem("epath") == "true" } onChange={ value => localStorage.setItem("epath",(value).toString()) }/>
							</SettingsOption>
						</SettingsSection>

					</div>
				</div>
			</div>
		);
	}
}

export default SettingsView;
