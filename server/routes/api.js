const Router = require('koa-router');
const router = new Router();

const Ctrl = require('../controllers/api');

// Match specific routes to their controllers
router.get('/assignments/list', Ctrl.getAllAssignments);

module.exports = router.routes();
