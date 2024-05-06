/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForumPostCreateDto } from '../models/ForumPostCreateDto';
import type { ForumPostGetAllResponse } from '../models/ForumPostGetAllResponse';
import type { ForumPostGetCountResponse } from '../models/ForumPostGetCountResponse';
import type { ForumPostGetResponse } from '../models/ForumPostGetResponse';
import type { ForumPostPaginateResponse } from '../models/ForumPostPaginateResponse';
import type { ForumPostUpdateDto } from '../models/ForumPostUpdateDto';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ForumPostService {

    /**
     * 创建帖子
     * @returns SuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: ForumPostCreateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/forum/post',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取所有帖子
     * @returns ForumPostGetAllResponse
     * @throws ApiError
     */
    public static getAll({
        sectionId,
    }: {
        sectionId: any,
    }): CancelablePromise<ForumPostGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post',
            query: {
                'sectionId': sectionId,
            },
        });
    }

    /**
     * 删除帖子
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
            url: '/api/forum/post/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 更新指定id帖子
     * @returns SuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        id: any,
        requestBody: ForumPostUpdateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/forum/post/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取指定id帖子
     * @returns ForumPostGetResponse
     * @throws ApiError
     */
    public static get({
        id,
        relationComments,
        relationSection,
        relationZans,
        relationCollects,
    }: {
        id: any,
        relationComments?: boolean,
        relationSection?: boolean,
        relationZans?: boolean,
        relationCollects?: boolean,
    }): CancelablePromise<ForumPostGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post/{id}',
            path: {
                'id': id,
            },
            query: {
                'relationComments': relationComments,
                'relationSection': relationSection,
                'relationZans': relationZans,
                'relationCollects': relationCollects,
            },
        });
    }

    /**
     * 帖子分页数据
     * @returns ForumPostPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
        title,
        sectionId,
        relationComments,
        relationSection,
        relationZans,
        relationCollects,
    }: {
        pageNo: number,
        pageSize: number,
        title?: string,
        sectionId?: string,
        relationComments?: boolean,
        relationSection?: boolean,
        relationZans?: boolean,
        relationCollects?: boolean,
    }): CancelablePromise<ForumPostPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post/page/all',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'title': title,
                'sectionId': sectionId,
                'relationComments': relationComments,
                'relationSection': relationSection,
                'relationZans': relationZans,
                'relationCollects': relationCollects,
            },
        });
    }

    /**
     * 当前用户帖子分页数据
     * @returns ForumPostPaginateResponse
     * @throws ApiError
     */
    public static paginateSession({
        pageNo,
        pageSize,
        title,
        sectionId,
        relationComments,
        relationSection,
        relationZans,
        relationCollects,
    }: {
        pageNo: number,
        pageSize: number,
        title?: string,
        sectionId?: string,
        relationComments?: boolean,
        relationSection?: boolean,
        relationZans?: boolean,
        relationCollects?: boolean,
    }): CancelablePromise<ForumPostPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post/page/session',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'title': title,
                'sectionId': sectionId,
                'relationComments': relationComments,
                'relationSection': relationSection,
                'relationZans': relationZans,
                'relationCollects': relationCollects,
            },
        });
    }

    /**
     * 帖子分页数据(游标)
     * @returns ForumPostPaginateResponse
     * @throws ApiError
     */
    public static paginateByCursor({
        pageSize,
        versionId,
        sectionId,
        relationComments,
        relationSection,
        relationZans,
        relationCollects,
    }: {
        pageSize: number,
        versionId?: string,
        sectionId?: string,
        relationComments?: boolean,
        relationSection?: boolean,
        relationZans?: boolean,
        relationCollects?: boolean,
    }): CancelablePromise<ForumPostPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post/page/cursor/all',
            query: {
                'versionId': versionId,
                'pageSize': pageSize,
                'sectionId': sectionId,
                'relationComments': relationComments,
                'relationSection': relationSection,
                'relationZans': relationZans,
                'relationCollects': relationCollects,
            },
        });
    }

    /**
     * 获取帖子数量
     * @returns ForumPostGetCountResponse
     * @throws ApiError
     */
    public static getCount({
        sectionId,
    }: {
        sectionId?: string,
    }): CancelablePromise<ForumPostGetCountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post/count/all',
            query: {
                'sectionId': sectionId,
            },
        });
    }

    /**
     * 获取登录用户帖子数量
     * @returns ForumPostGetCountResponse
     * @throws ApiError
     */
    public static getCountSession({
        sectionId,
    }: {
        sectionId?: string,
    }): CancelablePromise<ForumPostGetCountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post/count/session',
            query: {
                'sectionId': sectionId,
            },
        });
    }

}
