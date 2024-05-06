/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SuccessResult } from '../models/SuccessResult';
import type { WeixinOfficialAccountConfigGetByWeixinSuccessResponse } from '../models/WeixinOfficialAccountConfigGetByWeixinSuccessResponse';
import type { WeixinOfficialAccountConfigUpdateDto } from '../models/WeixinOfficialAccountConfigUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WeixinOfficialAccountConfigService {

    /**
     * 通过weixinId获取公众号配置
     * @returns WeixinOfficialAccountConfigGetByWeixinSuccessResponse
     * @throws ApiError
     */
    public static getAndCreateByWeixin({
        weixinId,
    }: {
        weixinId: string,
    }): CancelablePromise<WeixinOfficialAccountConfigGetByWeixinSuccessResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin/official-account-config/weixin/{weixinId}',
            path: {
                'weixinId': weixinId,
            },
        });
    }

    /**
     * 更新指定id的公众号配置
     * @returns SuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: WeixinOfficialAccountConfigUpdateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/weixin/official-account-config/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
