import { createAction } from 'services/action';
import { IMapLocation, IPlace } from 'services/api/places';

export enum PlacesActionType {
    REQUEST_PLACES = 'REQUEST_PLACES',
    REQUEST_PLACES_SUCCESS = 'REQUEST_PLACES_SUCCESS',
    REQUEST_PLACES_ERROR = 'REQUEST_PLACES_ERROR',
}

export function requestPlaces(location: IMapLocation) {
    return createAction(PlacesActionType.REQUEST_PLACES, location);
}

export function requestPlacesSuccess(places: IPlace[]) {
    return createAction(PlacesActionType.REQUEST_PLACES_SUCCESS, places);
}

export function requestPlacesError(error: Error) {
    return createAction(PlacesActionType.REQUEST_PLACES_ERROR, error);
}

export type RequestPlacesAction = ReturnType<typeof requestPlaces>;
export type RequestPlacesSuccessAction = ReturnType<typeof requestPlacesSuccess>;
export type RequestPlacesErrorAction = ReturnType<typeof requestPlacesError>;

export type PlacesAction =
    RequestPlacesAction |
    RequestPlacesSuccessAction |
    RequestPlacesErrorAction;
