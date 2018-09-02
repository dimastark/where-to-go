import { createAction } from 'services/action';
import { IPlace } from 'shared/places-api';

export enum FavouritesActionType {
    ADD_FAVOURITE = 'ADD_FAVOURITE',
    DELETE_FAVOURITE = 'DELETE_FAVOURITE',
    GET_FAVOURITES = 'GET_FAVOURITES',
}

export const addFavourite = (place: IPlace) =>
    createAction(FavouritesActionType.ADD_FAVOURITE, { place });

export const deleteFavourite = (id: string) =>
    createAction(FavouritesActionType.DELETE_FAVOURITE, { id });

export const getFavourites = () =>
    createAction(FavouritesActionType.GET_FAVOURITES);

export type AddFavouriteAction = ReturnType<typeof addFavourite>;
export type DeleteFavouriteAction = ReturnType<typeof deleteFavourite>;
export type GetFavouritesAction = ReturnType<typeof getFavourites>;

export type FavouritesAction =
    AddFavouriteAction |
    DeleteFavouriteAction |
    GetFavouritesAction;
