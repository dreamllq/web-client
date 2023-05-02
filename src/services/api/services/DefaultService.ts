/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @returns any 
     * @throws ApiError
     */
    public static staticControllerView(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/file/static/{id}',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static weixinPayCenterNotifyControllerCommonPay(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/weixin-platform/pay-center/notify/commonPay/{appid}/{mchid}',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static weixinPayCenterNotifyControllerNativePay(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/weixin-platform/pay-center/notify/nativePay/{appid}/{mchid}',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static weixinPayCenterNotifyControllerRefund(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/weixin-platform/pay-center/notify/refund/{appid}/{mchid}',
        });
    }

}
