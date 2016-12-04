// @flow
import { decamelizeKeys } from 'humps';
import * as ActionTypes from '../actions/action_types';

export default (store: any) => (next: any) => (action: any) => {
    for (const key in ActionTypes) {
        if ((ActionTypes[key] === action.type) && action.type.match(/.*_START$/)) {
            action.payload = decamelizeKeys(action.payload);
        }
    }
    next(action);
};
