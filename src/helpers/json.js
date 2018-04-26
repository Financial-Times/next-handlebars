'use strict';

module.exports = function (obj) {
	if (process.env.NODE_ENV !== 'development' && obj.hasOwnProperty('_locals') {
		throw Error('DO NOT DO THIS');
	}

	return JSON.stringify(obj);
};
