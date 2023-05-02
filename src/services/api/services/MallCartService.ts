/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MallCartBatchUpdateDto } from '../models/MallCartBatchUpdateDto';
import type { MallCartCreateDto } from '../models/MallCartCreateDto';
import type { MallCartGetAllResponse } from '../models/MallCartGetAllResponse';
import type { MallCartUpdateDto } from '../models/MallCartUpdateDto';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MallCartService {

    /**
     * 添加购物车
     * @returns SuccessResult 
     * @throws ApiError
     */
    public static add({
requestBody,
}: {
requestBody: MallCartCreateDto,
}): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/mall/cart',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取用户购物车
     * @returns MallCartGetAllResponse 
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<MallCartGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/cart',
        });
    }

    /**
     * 删除购物车
     * @returns SuccessResult 
     * @throws ApiError
     */
    public static remove({
id,
}: {
id: any,
}): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/mall/cart/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 更新购物车
     * @returns SuccessResult 
     * @throws ApiError
     */
    public static update({
id,
requestBody,
}: {
id: any,
requestBody: MallCartUpdateDto,
}): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/mall/cart/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 批量更新购物车
     * @returns SuccessResult 
     * @throws ApiError
     */
    public static batchUpdate({
requestBody,
}: {
requestBody: MallCartBatchUpdateDto,
}): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/mall/cart/batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
