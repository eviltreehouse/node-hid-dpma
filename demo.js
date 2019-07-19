'use strict';

const DpmaHID = require('./build/Release/HID'); // mock result from node-dpma
const nodehid = require('./nodehid');

const HID = nodehid.setNativeBinding(DpmaHID).HID;

if (process.argv[2]) {
	var hid = new HID(process.argv[2]);
	console.log(hid);
} else console.log(nodehid.devices());
