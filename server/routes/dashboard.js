const Router = require('koa-router');
const router = new Router();
const Routes = require('../controllers/dashboard');

router.get('/', Routes.index);

module.exports = router.routes();
