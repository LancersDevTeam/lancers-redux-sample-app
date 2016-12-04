// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootSaga from '../sagas/index';
import rootReducer from '../reducers';

const routing = routerMiddleware(browserHistory);
const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
    applyMiddleware(
        routing,
        sagaMiddleware,
        createLogger(),
    ),
);

function configureStore(initialState: any) {
    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;
