/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SettingGetItemsSuccessResponse } from '../models/SettingGetItemsSuccessResponse';
import type { SettingSetDto } from '../models/SettingSetDto';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingService {

    /**
     * 批量获取配置key值
     * @returns SettingGetItemsSuccessResponse
     * @throws ApiError
     */
    public static getItems({
        keys,
    }: {
        keys: any,
    }): CancelablePromise<SettingGetItemsSuccessResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/setting/{keys}',
            path: {
                'keys': keys,
            },
        });
    }

    /**
     * 设置获取配置key值
     * @returns SuccessResult
     * @throws ApiError
     */
    public static setItems({
        requestBody,
    }: {
        requestBody: SettingSetDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/setting',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
