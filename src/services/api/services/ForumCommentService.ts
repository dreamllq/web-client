/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForumCommentCreateDto } from '../models/ForumCommentCreateDto';
import type { ForumCommentGetAllResponse } from '../models/ForumCommentGetAllResponse';
import type { ForumCommentGetCountResponse } from '../models/ForumCommentGetCountResponse';
import type { ForumCommentGetResponse } from '../models/ForumCommentGetResponse';
import type { ForumCommentPaginateResponse } from '../models/ForumCommentPaginateResponse';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ForumCommentService {

    /**
     * 创建评论
     * @returns SuccessResult 
     * @throws ApiError
     */
    public static create({
requestBody,
}: {
requestBody: ForumCommentCreateDto,
}): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/forum/comment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取帖子下所有评论
     * @returns ForumCommentGetAllResponse 
     * @throws ApiError
     */
    public static getAll({
postId,
}: {
postId: any,
}): CancelablePromise<ForumCommentGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/comment',
            query: {
                'postId': postId,
            },
        });
    }

    /**
     * 删除指定id评论
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
            url: '/api/forum/comment/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 获取指定id评论
     * @returns ForumCommentGetResponse 
     * @throws ApiError
     */
    public static get({
id,
}: {
id: any,
}): CancelablePromise<ForumCommentGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/comment/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 获取帖子下分页评论
     * @returns ForumCommentPaginateResponse 
     * @throws ApiError
     */
    public static paginate({
pageNo,
pageSize,
postId,
content,
}: {
pageNo: number,
pageSize: number,
postId?: string,
content?: string,
}): CancelablePromise<ForumCommentPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/comment/page/all',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'postId': postId,
                'content': content,
            },
        });
    }

    /**
     * 获取帖子下登录用户的分页评论
     * @returns ForumCommentPaginateResponse 
     * @throws ApiError
     */
    public static paginateSession({
pageNo,
pageSize,
postId,
content,
}: {
pageNo: number,
pageSize: number,
postId?: string,
content?: string,
}): CancelablePromise<ForumCommentPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/comment/page/session',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'postId': postId,
                'content': content,
            },
        });
    }

    /**
     * 获取帖子下评论数量
     * @returns ForumCommentGetCountResponse 
     * @throws ApiError
     */
    public static getCount({
postId,
}: {
postId: any,
}): CancelablePromise<ForumCommentGetCountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/comment/count/all',
            query: {
                'postId': postId,
            },
        });
    }

    /**
     * 获取帖子下当前登录用户的评论数量
     * @returns ForumCommentGetCountResponse 
     * @throws ApiError
     */
    public static getCountSession({
postId,
}: {
postId: any,
}): CancelablePromise<ForumCommentGetCountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forum/comment/count/session',
            query: {
                'postId': postId,
            },
        });
    }

}
