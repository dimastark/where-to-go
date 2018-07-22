import Router from 'koa-router';

import places from './places';

const router = new Router();

router.use('/places', places.routes());

export default router;
