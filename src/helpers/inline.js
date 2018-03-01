'use strict';

const path = require('path');
const fs = require('fs');

module.exports = function (opts) {
	const file = opts.hash.file;
	return fs.readFileSync(path.join(process.cwd(), 'bower_components', opts.hash.file), 'utf-8');
};
