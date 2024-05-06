/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForumSectionCreateDto } from '../models/ForumSectionCreateDto';
import type { ForumSectionGetAllResponse } from '../models/ForumSectionGetAllResponse';
import type { ForumSectionGetResponse } from '../models/ForumSectionGetResponse';
import type { ForumSectionPaginateResponse } from '../models/ForumSectionPaginateResponse';
import type { ForumSectionUpdateDto } from '../models/ForumSectionUpdateDto';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ForumSectionService {

    /**
     * 获取所有论坛版块信息
     * @returns ForumSectionGetAllResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<ForumSectionGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/section',
        });
    }

    /**
     * 创建板块
     * @returns SuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: ForumSectionCreateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/forum/section',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取指定id论坛版块信息
     * @returns ForumSectionGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: any,
    }): CancelablePromise<ForumSectionGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/section/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 删除指定id板块
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
            url: '/api/forum/section/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 更新指定id板块
     * @returns SuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        id: any,
        requestBody: ForumSectionUpdateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/forum/section/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 板块分页数据
     * @returns ForumSectionPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
        name,
    }: {
        pageNo: number,
        pageSize: number,
        name?: string,
    }): CancelablePromise<ForumSectionPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/section/page/all',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'name': name,
            },
        });
    }

    /**
     * 登录人的板块分页数据
     * @returns ForumSectionPaginateResponse
     * @throws ApiError
     */
    public static paginateSession({
        pageNo,
        pageSize,
        name,
    }: {
        pageNo: number,
        pageSize: number,
        name?: string,
    }): CancelablePromise<ForumSectionPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/section/page/session',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'name': name,
            },
        });
    }

}
