// @flow
import { handleActions } from 'redux-actions';
import * as ActionTypes from '../actions/action_types';

export const initialState = {
    data: [],
    isLoading: false,
};

const qiitaUsers = handleActions({
    [ActionTypes.GET_QIITA_USERS_START]: (state: any, action: any): any => {
        return { ...state, isLoading: true }
    },
    [ActionTypes.GET_QIITA_USERS_OK]: (state: any, action: any): any => {
        return {
            ...state,
            isLoading: false,
            data: action.payload,
        };
    },
    [ActionTypes.GET_QIITA_USERS_NG]: (state: any, action: any): any => {
        return { ...state, isLoading: false };
    },
}, initialState);

export default qiitaUsers;
