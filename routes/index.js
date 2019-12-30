const Router = require('koa-router');
const router = new Router();

/**
 * digest and return all the routes specified below
 */
require('./root.js')({ router });
require('./page.js')({ router });

module.exports = router;