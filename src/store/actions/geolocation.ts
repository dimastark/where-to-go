import { createAction } from '../../services/action';

export enum GeolocationActionType {
    REQUEST_POSITION = 'REQUEST_POSITION',
    REQUEST_POSITION_ERROR = 'REQUEST_POSITION_ERROR',
    REQUEST_POSITION_SUCCESS = 'REQUEST_POSITION_SUCCESS',
}

export const requestPosition = () =>
    createAction(GeolocationActionType.REQUEST_POSITION);

export const requestPositionError = (error: Error) =>
    createAction(GeolocationActionType.REQUEST_POSITION_ERROR, { error });

export const requestPositionSuccess = (position: Position) =>
    createAction(GeolocationActionType.REQUEST_POSITION_SUCCESS, { position });

export type RequestPositionAction = ReturnType<typeof requestPosition>;
export type RequestPositionErrorAction = ReturnType<typeof requestPositionError>;
export type RequestPositionSuccessAction = ReturnType<typeof requestPositionSuccess>;

export type GeolocationAction =
    RequestPositionAction |
    RequestPositionErrorAction |
    RequestPositionSuccessAction;
