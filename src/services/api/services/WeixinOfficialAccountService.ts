/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteSuccessResult } from '../models/DeleteSuccessResult';
import type { GetJssdkSignatureDto } from '../models/GetJssdkSignatureDto';
import type { SendTemplateDto } from '../models/SendTemplateDto';
import type { WeixinOfficialAccountGetAccessTokenResponse } from '../models/WeixinOfficialAccountGetAccessTokenResponse';
import type { WeixinOfficialAccountGetNotifyUrlResponse } from '../models/WeixinOfficialAccountGetNotifyUrlResponse';
import type { WeixinPayCenterGetPayParamsDto } from '../models/WeixinPayCenterGetPayParamsDto';
import type { WeixinPayCenterGetPayParamsResponse } from '../models/WeixinPayCenterGetPayParamsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WeixinOfficialAccountService {

    /**
     * 获取accessToken
     * @returns WeixinOfficialAccountGetAccessTokenResponse
     * @throws ApiError
     */
    public static getAccessToken({
        appid,
    }: {
        appid: any,
    }): CancelablePromise<WeixinOfficialAccountGetAccessTokenResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin-platform/official-account/getAccessToken/{appid}',
            path: {
                'appid': appid,
            },
        });
    }

    /**
     * 获取公众号接收消息地址
     * @returns WeixinOfficialAccountGetNotifyUrlResponse
     * @throws ApiError
     */
    public static getNotifyUrl({
        appid,
    }: {
        appid: any,
    }): CancelablePromise<WeixinOfficialAccountGetNotifyUrlResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin-platform/official-account/getNotifyUrl/{appid}',
            path: {
                'appid': appid,
            },
        });
    }

    /**
     * 获取jssdk 认证签名
     * @returns any
     * @throws ApiError
     */
    public static getJssdkSignature({
        appid,
        requestBody,
    }: {
        appid: any,
        requestBody: GetJssdkSignatureDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/weixin-platform/official-account/jssdk/get-signature/{appid}',
            path: {
                'appid': appid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取所有模板列表
     * @returns any
     * @throws ApiError
     */
    public static getTemplates({
        appid,
    }: {
        appid: any,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin-platform/official-account/templates/{appid}',
            path: {
                'appid': appid,
            },
        });
    }

    /**
     * 删除模板
     * @returns DeleteSuccessResult
     * @throws ApiError
     */
    public static removeTemplate({
        appid,
        id,
    }: {
        appid: any,
        id: any,
    }): CancelablePromise<DeleteSuccessResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/weixin-platform/official-account/templates/{id}/{appid}',
            path: {
                'appid': appid,
                'id': id,
            },
        });
    }

    /**
     * 发送模板
     * @returns any
     * @throws ApiError
     */
    public static send({
        appid,
        requestBody,
    }: {
        appid: any,
        requestBody: SendTemplateDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/weixin-platform/official-account/send/{appid}',
            path: {
                'appid': appid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取微信JSSDK支付参数(自动下单, 兼容小程序)
     * @returns WeixinPayCenterGetPayParamsResponse
     * @throws ApiError
     */
    public static getPayParams({
        mchid,
        appid,
        requestBody,
    }: {
        mchid: any,
        appid: any,
        requestBody: WeixinPayCenterGetPayParamsDto,
    }): CancelablePromise<WeixinPayCenterGetPayParamsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/weixin-platform/pay-center/payParams/{appid}/{mchid}',
            path: {
                'mchid': mchid,
                'appid': appid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
