// @flow
import request from 'superagent';
import { Constants } from '../constants';

const API_ROOT_URL = `${Constants.API_ORIGIN}/api/v2`;

const Api = {
    getQiitaUsers: (payload: any, meta: any): Promise<*> => {
        return request.get(`${API_ROOT_URL}/users`);
    },
};

export default Api;
