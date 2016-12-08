// @flow
import * as ActionTypes from '../actions/action_types';
import MESSAGES from '../messages';

export default (store: any) => (next: any) => (action: any) => {
    /* eslint-disable guard-for-in */
    for (const key in ActionTypes) {
        if ((ActionTypes[key] === action.type) && action.type.match(/.*_START$/)) {
            if (!navigator.onLine) {
                console.log(MESSAGES.OFFLINE_NOTIFICATION);
                // TODO: モーダルダイアログでメッセージを表示する
                // return next(openAlertDialog(MESSAGES.OFFLINE_NOTIFICATION));
                return null;
            }
        }
    }
    return next(action);
};
