module.exports = ({ router }) => {

	/**
	 * Render index.njk with a demo test object.
	 */
	router.get('/', async (ctx, next) => {

		await ctx.render('index', {
			message: 'Hello world!',
			tools: [{
				type: 'Web Framework',
				name: 'Koa',
				url: 'https://koajs.com/'
			}, {
				type: 'Template Engine',
				name: 'Nunjucks',
				url: 'https://mozilla.github.io/nunjucks/'
			}, {
				type: 'CSS Framework',
				name: 'Skeleton',
				url: 'http://getskeleton.com/'
			}]
		});
	});
	
};