'use strict';

module.exports = function (options) {
	return parseInt(options.fn(this)) + 1;
};
