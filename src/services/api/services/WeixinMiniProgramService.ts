/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetPhoneNumberResponse } from '../models/GetPhoneNumberResponse';
import type { WeixinMiniProgramCodeToSessionResponse } from '../models/WeixinMiniProgramCodeToSessionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WeixinMiniProgramService {
    /**
     * 获取手机号
     * @returns GetPhoneNumberResponse
     * @throws ApiError
     */
    public static getPhoneNumber({
        code,
        appid,
    }: {
        code: any,
        appid: any,
    }): CancelablePromise<GetPhoneNumberResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin-platform/mini-program/getPhoneNumber/{appid}',
            path: {
                'appid': appid,
            },
            query: {
                'code': code,
            },
        });
    }
    /**
     * code2Session
     * @returns WeixinMiniProgramCodeToSessionResponse
     * @throws ApiError
     */
    public static code2Session({
        code,
        appid,
    }: {
        code: any,
        appid: any,
    }): CancelablePromise<WeixinMiniProgramCodeToSessionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin-platform/mini-program/code2Session/{appid}',
            path: {
                'appid': appid,
            },
            query: {
                'code': code,
            },
        });
    }
}
