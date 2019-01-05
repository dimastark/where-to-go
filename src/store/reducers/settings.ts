import { PlaceCategory } from '../../../shared/places-api';
import API from '../../services/api';
import { SettingsAction, SettingsActionType } from '../actions/settings';

export interface ISettingsState {
    category: PlaceCategory;
    radius: number;
}

const defaultState: ISettingsState = {
    category: API.settings.getCategory(),
    radius: API.settings.getRadius(),
};

export default function(state: ISettingsState = defaultState, action: SettingsAction): ISettingsState {
    switch (action.type) {
        case SettingsActionType.SET_CATEGORY:
            return {
                ...state,
                category: API.settings.setCategory(action.payload.category),
            };

        case SettingsActionType.SET_RADIUS:
            return {
                ...state,
                radius: API.settings.setRadius(action.payload.radius),
            };
    }

    return state;
}
