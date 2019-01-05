import { IPlace, IPlacesQuery } from '../../../shared/places-api';
import request from '../request';

export default {
    filter({ category, latitude, longitude, radius = 500 }: IPlacesQuery): Promise<IPlace[]> {
        return request('places', {
            query: { category, latitude, longitude, radius },
        });
    },
};
