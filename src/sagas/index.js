// @flow
import 'babel-polyfill';
// import { fork } from 'redux-saga/effects';
// import { watchFoo } from './foo';

export default function* rootSaga(): Generator<any, any, any> {
    yield [
        // fork(watchFoo),
    ];
}
