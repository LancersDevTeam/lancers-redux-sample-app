// @flow
import 'babel-polyfill';
import { call, fork, put, take } from 'redux-saga/effects';
import { getQiitaUsersOk, getQiitaUsersNg } from '../actions/qiita_users_action';
import * as ActionTypes from '../actions/action_types';
import Api from '../services/api';

export function* getQiitaUsers(action: any): Generator<any, any, any> {
    try {
        const response: any = yield call(Api.getQiitaUsers, action.payload, action.meta);
        console.log('response:::::::::::::::', response.body);
        const payload = response.body;
        const meta = { statusCode: response.statusCode }
        yield put(getQiitaUsersOk(payload, meta));
    } catch (e) {
        // TODO: url/to/github_issue
        const payload = e.response.body;
        const meta = { statusCode: e.response.statusCode }
        yield put(getQiitaUsersNg(payload, meta));
    }
}

export function* watchQiitaUsers(): Generator<any, any, any> {
    while (true) {
        const action = yield take(ActionTypes.GET_QIITA_USERS_START);
        yield fork(getQiitaUsers, action);
    }
}
