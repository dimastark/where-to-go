import { IPlace } from 'services/api/places';
import { allIds, byId } from 'services/transforms';
import { PlacesAction, PlacesActionType } from 'store/actions/places';

export interface IPlacesState {
    byId: {
        [id: string]: IPlace,
    } | null,
    error: Error | null,
    isPending: boolean,
    unusedIds: string[],
    usedIds: string[],
}

const defaultState: IPlacesState = {
    byId: null,
    error: null,
    isPending: false,
    unusedIds: [],
    usedIds: [],
};

export default function (state: IPlacesState = defaultState, action: PlacesAction): IPlacesState {
    switch (action.type) {
        case PlacesActionType.REQUEST_PLACES:
            return {
                ...state,
                isPending: true,
            };

        case PlacesActionType.REQUEST_PLACES_SUCCESS:
            return {
                ...state,
                byId: byId(action.payload),
                isPending: false,
                unusedIds: allIds(action.payload),
                usedIds: [],
            };

        case PlacesActionType.REQUEST_PLACES_ERROR:
            return {
                ...state,
                error: action.payload,
                isPending: false,
            };
    }

    return state;
}
