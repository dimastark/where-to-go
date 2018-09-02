import got from 'got';

import config from 'config';
import { IPlace } from 'shared/places-api';
import { InternalServerError } from './errors';
import { camelCaseRecursive } from './utils';

interface IOptions {
    lat: number;
    lng: number;
    radius?: number;
    category?: string;
}

export async function getAllPlaces(options: IOptions): Promise<IPlace[]> {
    const { lat, lng, radius, category } = options;

    const { body } = await got(config.placesApiUrl, {
        headers: {
            'Accept-Encoding': 'gzip',
            'Accept-Language': 'ru,en;q=0.9',
        },
        json: true,
        query: {
            app_code: config.placesAppCode,
            app_id: config.placesAppId,
            cat: category || 'eat-drink',
            in: `${lat},${lng};r=${radius || 500}`,
            size: config.placesPageSize,
            tf: 'plain',
        },
    });

    if (!Array.isArray(body.results.items)) {
        throw new InternalServerError('Places fetch error.');
    }

    return camelCaseRecursive(body.results.items);
}
