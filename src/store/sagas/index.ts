import { all } from 'redux-saga/effects';

import watchGeolocation from './geolocation';
import watchPlaces from './places';

export default function * () {
    yield all([
        watchGeolocation(),
        watchPlaces(),
    ]);
}
