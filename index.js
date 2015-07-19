'use strict';
module.exports = function (buf) {
	return buf[0] === 0x0 &&
		buf[1] === 0x0 &&
		buf[2] === 0x0 &&
		buf[3] === 0x14 &&
		buf[4] === 0x66 &&
		buf[5] === 0x74 &&
		buf[6] === 0x79 &&
		buf[7] === 0x70;
};
