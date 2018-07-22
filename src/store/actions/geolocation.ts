import { createAction } from 'services/action';

export enum GeolocationActionType {
    REQUEST_POSITION = 'REQUEST_POSITION',
    REQUEST_POSITION_SUCCESS = 'REQUEST_POSITION_SUCCESS',
    REQUEST_POSITION_ERROR = 'REQUEST_POSITION_ERROR',
}

export function requestPosition() {
    return createAction(GeolocationActionType.REQUEST_POSITION);
}

export function requestPositionSuccess(position: Position) {
    return createAction(GeolocationActionType.REQUEST_POSITION_SUCCESS, position);
}

export function requestPositionError(error: Error) {
    return createAction(GeolocationActionType.REQUEST_POSITION_ERROR, error);
}

export type RequestPositionAction = ReturnType<typeof requestPosition>;
export type RequestPositionSuccessAction = ReturnType<typeof requestPositionSuccess>;
export type RequestPositionErrorAction = ReturnType<typeof requestPositionError>;

export type GeolocationAction =
    RequestPositionAction |
    RequestPositionSuccessAction |
    RequestPositionErrorAction;
