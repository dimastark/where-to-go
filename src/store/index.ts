import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

const store = createStore(
    reducer,
    applyMiddleware(...middlewares),
);

sagaMiddleware.run(saga);

export default store;
