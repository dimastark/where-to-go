import Router from 'koa-router';

import isFloatString from '../../lib/is-float-string';
import { getAllPlaces } from '../../lib/places-api';

const router = new Router();

router.get('/', async ctx => {
    if (!isFloatString(ctx.query.latitude) || !isFloatString(ctx.query.longitude)) {
        ctx.response.status = 400;
        ctx.response.message = 'Incorrect "latitude" or "longitude".';
    } else {
        const latitude = Number(ctx.query.latitude);
        const longitude = Number(ctx.query.longitude);
        const type = ctx.query.type;

        ctx.response.body = await getAllPlaces({ latitude, longitude }, type);
    }
});

export default router;
