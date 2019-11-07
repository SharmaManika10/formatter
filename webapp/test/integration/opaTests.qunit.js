/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Formatter_assignment/Formatter_assignment/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});