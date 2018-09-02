import Router from 'koa-router';

import { ValidationError } from 'lib/errors';
import { getAllPlaces } from 'lib/places-api';
import { isFloatString } from 'lib/utils';

const router = new Router();

router.get('/', async (ctx) => {
    const { category, latitude, longitude, radius } = ctx.query;

    if (!isFloatString(latitude) || !isFloatString(longitude)) {
        throw new ValidationError('Invalid "latitude" or "longitude".');
    } else if (radius && !isFloatString(radius)) {
        throw new ValidationError('Invalid "radius"');
    }

    ctx.response.body = await getAllPlaces({
        category,
        lat: Number(latitude),
        lng: Number(longitude),
        radius: Number(radius),
    });
});

export default router;
