/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WeixinOfficialAccountOauthService {

    /**
     * @returns any 
     * @throws ApiError
     */
    public static weixinOfficialAccountOauthControllerOauthJumpInfo({
appid,
}: {
appid: any,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin-platform/official-account-oauth/oauth-jump/info/{appid}',
            path: {
                'appid': appid,
            },
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static weixinOfficialAccountOauthControllerOauthJumpBase({
appid,
}: {
appid: any,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin-platform/official-account-oauth/oauth-jump/base/{appid}',
            path: {
                'appid': appid,
            },
        });
    }

}
