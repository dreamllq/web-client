/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MallGoodGroupCreateDto } from '../models/MallGoodGroupCreateDto';
import type { MallGoodGroupGetAllResponse } from '../models/MallGoodGroupGetAllResponse';
import type { MallGoodGroupGetResponse } from '../models/MallGoodGroupGetResponse';
import type { MallGoodGroupGetTreeResponse } from '../models/MallGoodGroupGetTreeResponse';
import type { MallGoodGroupUpdateDto } from '../models/MallGoodGroupUpdateDto';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MallGoodGroupService {

    /**
     * 创建商品分组
     * @returns SuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: MallGoodGroupCreateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/mall/good-group',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取平铺商品分组数据
     * @returns MallGoodGroupGetAllResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<MallGoodGroupGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/good-group',
        });
    }

    /**
     * 删除商品分组
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
            url: '/api/mall/good-group/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 更新商品分组
     * @returns SuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        id: any,
        requestBody: MallGoodGroupUpdateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/mall/good-group/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取商品分组
     * @returns MallGoodGroupGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: any,
    }): CancelablePromise<MallGoodGroupGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/good-group/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 获取商品分组树
     * @returns MallGoodGroupGetTreeResponse
     * @throws ApiError
     */
    public static getTree(): CancelablePromise<MallGoodGroupGetTreeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/good-group/tree',
        });
    }

}
