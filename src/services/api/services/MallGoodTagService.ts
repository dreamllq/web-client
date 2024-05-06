/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MallGoodTabGetAllResponse } from '../models/MallGoodTabGetAllResponse';
import type { MallGoodTagCreateDto } from '../models/MallGoodTagCreateDto';
import type { MallGoodTagGetResponse } from '../models/MallGoodTagGetResponse';
import type { MallGoodTagPaginateResponse } from '../models/MallGoodTagPaginateResponse';
import type { MallGoodTagUpdateDto } from '../models/MallGoodTagUpdateDto';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MallGoodTagService {

    /**
     * 创建标签
     * @returns SuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: MallGoodTagCreateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/mall/good-tag',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取所有标签
     * @returns MallGoodTabGetAllResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<MallGoodTabGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/good-tag',
        });
    }

    /**
     * 删除标签
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
            url: '/api/mall/good-tag/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 更新标签
     * @returns SuccessResult
     * @throws ApiError
     */
    public static remove1({
        id,
        requestBody,
    }: {
        id: any,
        requestBody: MallGoodTagUpdateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/mall/good-tag/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取标签
     * @returns MallGoodTagGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: any,
    }): CancelablePromise<MallGoodTagGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/good-tag/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 标签分页
     * @returns MallGoodTagPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
    }: {
        pageNo: number,
        pageSize: number,
    }): CancelablePromise<MallGoodTagPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/good-tag/page',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
            },
        });
    }

}
