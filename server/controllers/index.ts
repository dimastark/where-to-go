import Router from 'koa-router';

import api from './api';
import root from './root';

const router = new Router();

router.use('/', root.routes());
router.use('/api', api.routes());

export default router;
