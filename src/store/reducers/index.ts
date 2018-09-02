import { combineReducers } from 'redux';

import favourites, { IFavouritesState } from './favourites';
import geolocation, { IGeolocationState } from './geolocation';
import places, { IPlacesState } from './places';
import settings, { ISettingsState } from './settings';

export interface IRootState {
    favourites: IFavouritesState;
    geolocation: IGeolocationState;
    places: IPlacesState;
    settings: ISettingsState;
}

export default combineReducers({
    favourites,
    geolocation,
    places,
    settings,
});
