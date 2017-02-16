/*global it, describe, beforeEach, before*/
'use strict';

const request = require('supertest');
const app = require('./fixtures/no-bower-app/main');

describe('express handlebars setup', function () {
	before(function () {
		return app.promise;
	});

	it('should do templating', function (done) {
		request(app)
			.get('/templated')
			.expect(200, /FT/, done);
	});

});
