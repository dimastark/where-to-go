import Router from 'koa-router';

import { ValidationError } from 'lib/errors';
import { getAllPlaces } from 'lib/places-api';
import { isFloatString } from 'lib/utils';

const router = new Router();

router.get('/', async ctx => {
    for (const param of ['latitude', 'longitude', 'radius']) {
        if (!isFloatString(ctx.query[param])) {
            throw new ValidationError(`Invalid "${param}"`);
        }
    }

    const { category, latitude, longitude, radius } = ctx.query;

    ctx.response.body = await getAllPlaces({
        category,
        lat: Number(latitude),
        lng: Number(longitude),
        radius: Number(radius),
    });
});

export default router;
