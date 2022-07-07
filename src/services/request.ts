import axios, { AxiosPromise } from "axios";
import type { RequestOptions as octokitRequestOptions } from '@octokit/types';


interface RequestMethod {
    <T = any>(options: octokitRequestOptions): Promise<T>;
}

export const request: RequestMethod = (options) => {
    const app = localStorage.getItem('app')!;
    const access_token = JSON.parse(app).github.token;

    if (access_token) {
        const baseHeaders = {
            authorization: `token ${access_token}`,
        };
        return axios({ ...options, headers: { ...baseHeaders, ...options.headers } }).then(res => res.data);
    } else {
        throw '请设置 access_token';
    }
};

