module.exports = ({ router }) => {

	/**
	 * Only here to supply another route :)
	 */
	router.get('/page', (ctx, next) => {

		ctx.body = 'Hello world from /page';

	});
	
};
