module.exports = (presenterPath, context, options) => {
  const presenterName = presenterPath.split('/').pop.replace(/-([a-z])/g, g => {g[1].toUpperCase()});
  const Presenter = require(`${process.cwd}${presenterPath}`);
	if (options.data) {
		const data = Handlebars.createFrame(options.data);
		data[presenterName] = new Presenter(context);
		return options.fn(context, {data});
	}
}
