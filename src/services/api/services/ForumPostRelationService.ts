/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForumPostRelationCreateDto } from '../models/ForumPostRelationCreateDto';
import type { ForumPostRelationGetAllResponse } from '../models/ForumPostRelationGetAllResponse';
import type { ForumPostRelationGetCountResponse } from '../models/ForumPostRelationGetCountResponse';
import type { ForumPostRelationPaginateResponse } from '../models/ForumPostRelationPaginateResponse';
import type { SuccessResult } from '../models/SuccessResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ForumPostRelationService {
    /**
     * 创建用户和帖子的关系
     * @returns SuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: ForumPostRelationCreateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/forum/post-relation',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取所有用户和帖子的关系
     * @returns ForumPostRelationGetAllResponse
     * @throws ApiError
     */
    public static getAll({
        type,
        postId,
    }: {
        type?: 'unknown' | 'zan' | 'collect',
        postId?: string,
    }): CancelablePromise<ForumPostRelationGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post-relation',
            query: {
                'type': type,
                'postId': postId,
            },
        });
    }
    /**
     * 删除用户和帖子的关系
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
            url: '/api/forum/post-relation/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 获取指定id的用户和帖子的关系
     * @returns SuccessResult
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: any,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post-relation/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 获取登录用户的所有用户和帖子的关系
     * @returns ForumPostRelationGetAllResponse
     * @throws ApiError
     */
    public static getAllSession({
        type,
        postId,
    }: {
        type?: 'unknown' | 'zan' | 'collect',
        postId?: string,
    }): CancelablePromise<ForumPostRelationGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post-relation/session/info',
            query: {
                'type': type,
                'postId': postId,
            },
        });
    }
    /**
     * 获取用户和帖子的关系的分页数据
     * @returns ForumPostRelationPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
        type,
        postId,
    }: {
        pageNo: number,
        pageSize: number,
        type?: 'unknown' | 'zan' | 'collect',
        postId?: string,
    }): CancelablePromise<ForumPostRelationPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post-relation/page/all',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'type': type,
                'postId': postId,
            },
        });
    }
    /**
     * 获取登录用户的用户和帖子的关系的分页数据
     * @returns ForumPostRelationPaginateResponse
     * @throws ApiError
     */
    public static paginateSession({
        pageNo,
        pageSize,
        type,
        postId,
    }: {
        pageNo: number,
        pageSize: number,
        type?: 'unknown' | 'zan' | 'collect',
        postId?: string,
    }): CancelablePromise<ForumPostRelationPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post-relation/page/session',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'type': type,
                'postId': postId,
            },
        });
    }
    /**
     * 获取用户和帖子的关系的数量
     * @returns ForumPostRelationGetCountResponse
     * @throws ApiError
     */
    public static getCount({
        type,
        postId,
    }: {
        type?: 'unknown' | 'zan' | 'collect',
        postId?: string,
    }): CancelablePromise<ForumPostRelationGetCountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post-relation/count/all',
            query: {
                'type': type,
                'postId': postId,
            },
        });
    }
    /**
     * 获取登录用户的用户和帖子的关系的数量
     * @returns ForumPostRelationGetCountResponse
     * @throws ApiError
     */
    public static getCountSession({
        type,
        postId,
    }: {
        type?: 'unknown' | 'zan' | 'collect',
        postId?: string,
    }): CancelablePromise<ForumPostRelationGetCountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/post-relation/count/session',
            query: {
                'type': type,
                'postId': postId,
            },
        });
    }
}
