/**
 * Set up dependencies and defaults
 */
const Koa 		= require('koa');
const serve 	= require('koa-static');
const views 	= require('koa-views');
const logger 	= require('koa-logger');
const path 		= require('path');

const router 	= require('./routes');
const port 		= process.env.PORT || 8080;
const app 		= new Koa();

/**
 * Set up Middlewares.
 * 	- Configure views to use nunjucks.
 * 	- Serve /static as folder for static files
 * 	- A simple console logger for development
 * 	- Routes as set up in /routes/index.js
 */
app	.use(views(path.join(__dirname, 'views'), { 
		extension: 'njk', 
		map: {
			njk: 'nunjucks' 
		}, 		
		options: {
			settings: { 
				views: path.join(__dirname, 'views') 
			}
		}
	}))
	.use(serve(path.join(__dirname, 'static')))
	.use(logger())
	.use(router.routes())
	.use(router.allowedMethods());

/**
 * Launch the server
 */
const server = app.listen(port, () => {

	console.log(`Server is running on port: ${ server.address().port }`);

});