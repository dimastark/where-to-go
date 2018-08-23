import { combineReducers } from 'redux';

import geolocation, { IGeolocationState } from './geolocation';
import places, { IPlacesState } from './places';

export interface IRootState {
    geolocation: IGeolocationState,
    places: IPlacesState,
}

export default combineReducers({
    geolocation,
    places,
});
