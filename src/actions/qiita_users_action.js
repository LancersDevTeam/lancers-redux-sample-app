// @flow
import * as ActionTypes from './action_types';

export function getQiitaUsersStart(payload: any): any {
    return {
        type: ActionTypes.GET_QIITA_USERS_START,
        payload,
    };
}

export function getQiitaUsersOk(payload: any, meta: any): any {
    return {
        type: ActionTypes.GET_QIITA_USERS_OK,
        payload,
        meta,
    };
}

export function getQiitaUsersNg(payload: any, meta: any): any {
    return {
        type: ActionTypes.GET_QIITA_USERS_NG,
        payload,
        meta,
    };
}
