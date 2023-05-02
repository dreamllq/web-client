/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WeixinOfficialAccountNotifyService {

    /**
     * @returns any 
     * @throws ApiError
     */
    public static weixinOfficialAccountNotifyControllerNotify({
appid,
}: {
appid: any,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/weixin-platform/official-account/notify/{appid}',
            path: {
                'appid': appid,
            },
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static weixinOfficialAccountNotifyControllerCheckSignature({
appid,
}: {
appid: any,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin-platform/official-account/notify/{appid}',
            path: {
                'appid': appid,
            },
        });
    }

}
