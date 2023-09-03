/**
 * @author Fabrizio Giordano (Fab)
 */
import '../../../css/controlpanelcontainer.css';
import '../../../css/style.css';
import $ from 'jquery';

class ControlPanelView {

	_html;

	constructor() {
		this._html = "<div id='controlButtonContainer'>" +
			"	<div id='hamburgerButton'>" +
			"		<span></span><span></span><span></span><span></span>" +
			"	</div>" +
			"	<img id='gotoButton' class='controlButton' src='images/catbutton2.png'/>" +
			"	<img id='cataloguesButton' class='controlButton' src='images/catbutton2.png' />" +
			"	<img id='footprintsButton' class='controlButton' src='images/imgbutton2.png' />" +
			"	<img id='mapsButton' class='controlButton' src='images/mapbutton2.png' />" +
			"	<img id='settingsButton' class='controlButton' src='images/settings.png' />" +
			"</div>" +
			"<div id='settings-popup'></div>";
		
	}

	get html() {
		return this._html;
	}

	appendChild(html) {
		$("#controlpanel2container").append(html);
	};

	showPopup(html) {
		$("#settings-popup").empty();
		$("#settings-popup").append(html);
		$("#settings-popup").css("display", "block");
	}

	hidePopup() {
		$("#settings-popup").empty();
		$("#settings-popup").css("display", "none");
	}



}
export default ControlPanelView;