import { all, call, put, takeLatest } from 'redux-saga/effects';

import API from '../../services/api';
import { GeolocationActionType, requestPositionError, requestPositionSuccess } from '../actions/geolocation';

function * requestPositionAsync() {
    try {
        const position = yield call(API.geolocation.get);

        yield put(requestPositionSuccess(position));
    } catch (error) {
        yield put(requestPositionError(error));
    }
}

export default function *() {
    yield all([
        takeLatest(GeolocationActionType.REQUEST_POSITION, requestPositionAsync),
    ]);
}
