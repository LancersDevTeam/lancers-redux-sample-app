// @flow
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import qiitaUsers from './qiita_users_reducer';

const rootReducer = combineReducers({
    qiitaUsers,
    routing: routerReducer,
});

export default rootReducer;
