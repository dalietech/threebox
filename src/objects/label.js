const utils = require("../utils/utils.js");
const Objects = require('./objects.js');
const THREE = require('./CSS2DRenderer.js');

function Label(obj) {

	obj = utils._validate(obj, Objects.prototype._defaults.label);

	let div = Objects.prototype.drawLabelHTML(obj.htmlElement, obj.cssClass);

	let label = new THREE.CSS2DObject(div);
	label.visible = obj.alwaysVisible;
	label.alwaysVisible = obj.alwaysVisible;

	var userScaleGroup = Objects.prototype._makeGroup(label, obj);
	Objects.prototype._addMethods(userScaleGroup);
	userScaleGroup.label = label;
	userScaleGroup.visibility = obj.alwaysVisible;

	return userScaleGroup;
}


module.exports = exports = Label;