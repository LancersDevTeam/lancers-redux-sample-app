// @flow
import 'babel-polyfill';
import { fork } from 'redux-saga/effects';
import { watchQiitaUsers } from './qiita_users_saga';

export default function* rootSaga(): Generator<any, any, any> {
    yield [
        fork(watchQiitaUsers),
    ];
}
