'use strict';

module.exports = function (helpers) {
	helpers = helpers || {};

	helpers.paragraphs = require('./helpers/paragraphs');
	helpers.removeImageTags = require('./helpers/remove-image-tags');
	helpers.ifEquals = require('./helpers/if-equals');
	helpers.ifAll = require('./helpers/if-all');
	helpers.ifSome = require('./helpers/if-some');
	helpers.topicUrl = require('./helpers/topic-url');
	helpers.dateformat = require('./helpers/dateformat');
	helpers.resize = require('./helpers/resize');
	helpers.encode = require('./helpers/encode');
	helpers.defineBlock = require('./helpers/define-block');
	helpers.outputBlock = require('./helpers/output-block');
	helpers.slice = require('./helpers/slice');
	helpers.json = require('./helpers/json');
	helpers.usePartial = require('./helpers/use-partial');
	helpers.navigation = require('./helpers/navigation');
	helpers.subNavigation = require('./helpers/sub-navigation');

	return helpers;
};
