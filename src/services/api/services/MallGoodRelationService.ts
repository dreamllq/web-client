/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MallGoodRelationCreateDto } from '../models/MallGoodRelationCreateDto';
import type { MallGoodRelationGetResponse } from '../models/MallGoodRelationGetResponse';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MallGoodRelationService {

    /**
     * 创建关系
     * @returns SuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: MallGoodRelationCreateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/mall/good-relation',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 删除关系
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
            url: '/api/mall/good-relation/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 筛选一个关系
     * @returns MallGoodRelationGetResponse
     * @throws ApiError
     */
    public static getWidthFilter({
        userId,
        goodId,
        type,
    }: {
        userId: string,
        goodId: string,
        type: any,
    }): CancelablePromise<MallGoodRelationGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/good-relation/item',
            query: {
                'userId': userId,
                'goodId': goodId,
                'type': type,
            },
        });
    }

}
