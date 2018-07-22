import { GeolocationAction, GeolocationActionType } from 'store/actions/geolocation';

export interface IGeolocationState {
    error: Error | null,
    isPending: boolean,
    position: Position | null,
}

const defaultState: IGeolocationState = {
    error: null,
    isPending: false,
    position: null,
};

export default function (state: IGeolocationState = defaultState, action: GeolocationAction): IGeolocationState {
    switch (action.type) {
        case GeolocationActionType.REQUEST_POSITION:
            return {
                ...state,
                isPending: true,
            };

        case GeolocationActionType.REQUEST_POSITION_SUCCESS:
            return {
                ...state,
                isPending: false,
                position: action.payload,
            };

        case GeolocationActionType.REQUEST_POSITION_ERROR:
            return {
                ...state,
                error: action.payload,
                isPending: false,
            };
    }

    return state;
}
