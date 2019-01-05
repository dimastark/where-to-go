import { IPlace } from '../../../shared/places-api';
import API from '../../services/api';
import { FavouritesAction, FavouritesActionType } from '../actions/favourites';

export interface IFavouritesState {
    items: IPlace[] | null;
}

const defaultState: IFavouritesState = {
    items: null,
};

export default function(state: IFavouritesState = defaultState, action: FavouritesAction): IFavouritesState {
    switch (action.type) {
        case FavouritesActionType.ADD_FAVOURITE:
            return {
                ...state,
                items: API.favourites.add(state.items, action.payload.place),
            };

        case FavouritesActionType.DELETE_FAVOURITE:
            return {
                ...state,
                items: API.favourites.delete(state.items, action.payload.id),
            };

        case FavouritesActionType.GET_FAVOURITES:
            return {
                ...state,
                items: API.favourites.get(),
            };
    }

    return state;
}
