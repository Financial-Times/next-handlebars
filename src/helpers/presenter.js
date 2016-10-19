const path = require('path');
const Handlebars = require('handlebars');

module.exports = (presenterPath, context, options) => {
	const presenterName = path.basename(presenterPath).replace(/-([a-z])/g, g => g[1].toUpperCase());
	let Presenter;
	if (presenterPath.startsWith('.')) {
		Presenter = require(path.join(process.cwd(), presenterPath));
	} else {
		Presenter = require(presenterPath);
	}
	if (options.data) {
		const data = Handlebars.createFrame(options.data);
		data[presenterName] = new Presenter(context);
		return options.fn(context, {data});
	}
}
