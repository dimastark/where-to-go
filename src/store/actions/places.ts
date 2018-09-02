import { createAction } from 'services/action';
import { IPlace, IPlacesQuery } from 'shared/places-api';

export enum PlacesActionType {
    CHOICE_PLACE = 'CHOICE_PLACE',
    REQUEST_PLACES = 'REQUEST_PLACES',
    REQUEST_PLACES_ERROR = 'REQUEST_PLACES_ERROR',
    REQUEST_PLACES_SUCCESS = 'REQUEST_PLACES_SUCCESS',
}

export const choicePlace = (places?: IPlace[]) =>
    createAction(PlacesActionType.CHOICE_PLACE, { places });

export const requestPlaces = (location: IPlacesQuery) =>
    createAction(PlacesActionType.REQUEST_PLACES, { location });

export const requestPlacesError = (error: Error) =>
    createAction(PlacesActionType.REQUEST_PLACES_ERROR, { error });

export const requestPlacesSuccess = (places: IPlace[]) =>
    createAction(PlacesActionType.REQUEST_PLACES_SUCCESS, { places });

export type ChoicePlaceAction = ReturnType<typeof choicePlace>;
export type RequestPlacesAction = ReturnType<typeof requestPlaces>;
export type RequestPlacesErrorAction = ReturnType<typeof requestPlacesError>;
export type RequestPlacesSuccessAction = ReturnType<typeof requestPlacesSuccess>;

export type PlacesAction =
    ChoicePlaceAction |
    RequestPlacesAction |
    RequestPlacesErrorAction |
    RequestPlacesSuccessAction;
