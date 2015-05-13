'use strict';

module.exports = function (params) {
	// expect the navigation middleware to be used
	var nav = params.data.root.nav;
	if (nav) {
		var buffer = [];
		nav.forEach(function (sectionItem) {
			buffer.push(params.fn(sectionItem));
		});
		return buffer.join('');
	} else {
		return params.inverse();
	}
};
