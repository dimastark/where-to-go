import { IPlace, IPlacesQuery } from 'shared/places-api';
import request from '../request';

export default {
    filter(query: IPlacesQuery): Promise<IPlace[]> {
        return request('places', { query });
    },
};
