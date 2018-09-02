import { all, call, put, takeLatest } from 'redux-saga/effects';

import API from 'services/api';
import { PlacesActionType, RequestPlacesAction, requestPlacesError, requestPlacesSuccess } from 'store/actions/places';

function * requestPlacesAsync({ payload }: RequestPlacesAction) {
    try {
        const settings = API.settings.getSettings();
        const places = yield call(API.places.filter, {
            ...settings,
            ...payload.location,
        });

        yield put(requestPlacesSuccess(places));
    } catch (error) {
        yield put(requestPlacesError(error));
    }
}

export default function *() {
    yield all([
        takeLatest(PlacesActionType.REQUEST_PLACES, requestPlacesAsync),
    ]);
}
