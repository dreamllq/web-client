/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SessionGetUserResponse } from '../models/SessionGetUserResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SessionService {

    /**
     * 获取当前登录人用户信息
     * @returns SessionGetUserResponse 
     * @throws ApiError
     */
    public static getUser(): CancelablePromise<SessionGetUserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/session/user',
        });
    }

    /**
     * 获取当前登录人有权限的资源
     * @returns any 
     * @throws ApiError
     */
    public static getResources(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/session/resources',
        });
    }

}
