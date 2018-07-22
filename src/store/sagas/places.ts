import { all, call, put, takeLatest } from 'redux-saga/effects';

import API from 'services/api';
import {
    PlacesActionType,
    RequestPlacesAction,
    requestPlacesError,
    requestPlacesSuccess,
} from 'store/actions/places';

function * requestPlacesAsync({ payload }: RequestPlacesAction) {
    try {
        const places = yield call(API.places.filter, payload);

        yield put(requestPlacesSuccess(places));
    } catch (error) {
        yield put(requestPlacesError(error));
    }
}

export default function * () {
    yield all([
        takeLatest(PlacesActionType.REQUEST_PLACES, requestPlacesAsync)
    ]);
}
