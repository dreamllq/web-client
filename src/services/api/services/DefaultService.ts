/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAiSessionDto } from '../models/CreateAiSessionDto';
import type { UpdateAiSessionDto } from '../models/UpdateAiSessionDto';

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

    /**
     * @returns any
     * @throws ApiError
     */
    public static aiSessionControllerCreate({
        requestBody,
    }: {
        requestBody: CreateAiSessionDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai-session',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static aiSessionControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai-session',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static aiSessionControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai-session/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static aiSessionControllerUpdate({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateAiSessionDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/ai-session/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static aiSessionControllerRemove({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/ai-session/{id}',
            path: {
                'id': id,
            },
        });
    }

}
