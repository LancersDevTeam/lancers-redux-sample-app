// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory'
import rootSaga from '../sagas/index';
import rootReducer from '../reducers';
import responseCamelizer from '../middlewares/response_camelizer';
import requestDecamelizer from '../middlewares/request_decamelizer';
import networkStatusChecker from '../middlewares/network_status_checker';

export const history = createHistory();
const routing = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
    applyMiddleware(
        routing,
        networkStatusChecker, // sagaMiddleware より前に置かないと _START をキャンセルしても API コールが行われる
        sagaMiddleware,
        responseCamelizer,
        requestDecamelizer,
        createLogger(),
    ),
);

function configureStore(initialState: any) {
    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;
