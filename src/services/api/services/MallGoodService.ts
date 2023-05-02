/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MallGoodCreateDto } from '../models/MallGoodCreateDto';
import type { MallGoodGetAllResponse } from '../models/MallGoodGetAllResponse';
import type { MallGoodGetResponse } from '../models/MallGoodGetResponse';
import type { MallGoodPaginateResponse } from '../models/MallGoodPaginateResponse';
import type { MallGoodUpdateDto } from '../models/MallGoodUpdateDto';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MallGoodService {

    /**
     * 创建商品
     * @returns SuccessResult 
     * @throws ApiError
     */
    public static create({
requestBody,
}: {
requestBody: MallGoodCreateDto,
}): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/mall/good',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取所有商品数据
     * @returns MallGoodGetAllResponse 
     * @throws ApiError
     */
    public static getAll({
shopId,
}: {
shopId: string,
}): CancelablePromise<MallGoodGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/good',
            query: {
                'shopId': shopId,
            },
        });
    }

    /**
     * 删除商品
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
            url: '/api/mall/good/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 更新商品
     * @returns SuccessResult 
     * @throws ApiError
     */
    public static update({
id,
requestBody,
}: {
id: any,
requestBody: MallGoodUpdateDto,
}): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/mall/good/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取id商品数据
     * @returns MallGoodGetResponse 
     * @throws ApiError
     */
    public static get({
id,
}: {
id: any,
}): CancelablePromise<MallGoodGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/good/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 获取分页商品数据
     * @returns MallGoodPaginateResponse 
     * @throws ApiError
     */
    public static paginate({
pageNo,
pageSize,
shopId,
title,
}: {
pageNo: number,
pageSize: number,
shopId?: string,
title?: string,
}): CancelablePromise<MallGoodPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/good/paginate',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'shopId': shopId,
                'title': title,
            },
        });
    }

}
