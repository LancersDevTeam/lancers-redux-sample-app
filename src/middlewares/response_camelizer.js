// @flow
import { camelizeKeys } from 'humps';
import * as ActionTypes from '../actions/action_types';

export default (store: any) => (next: any) => (action: any) => {
    for (const key in ActionTypes) {
        if ((ActionTypes[key] === action.type) && action.type.match(/.*(_OK|_NG)$/)) {
            action.payload = camelizeKeys(action.payload);
        }
    }
    next(action);
};
