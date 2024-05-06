/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MallGoodCommentCreateDto } from '../models/MallGoodCommentCreateDto';
import type { MallGoodCommentPaginateResponse } from '../models/MallGoodCommentPaginateResponse';
import type { MallGoodCommentPaginateWidthCursorResponse } from '../models/MallGoodCommentPaginateWidthCursorResponse';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MallGoodCommentService {

    /**
     * 评论
     * @returns SuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: MallGoodCommentCreateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/mall/good-comment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 删除评论
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
            url: '/api/mall/good-comment/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 游标分页
     * @returns MallGoodCommentPaginateWidthCursorResponse
     * @throws ApiError
     */
    public static paginateWidthCursor({
        count,
        afterId,
        goodId,
    }: {
        count: number,
        afterId: string,
        goodId: string,
    }): CancelablePromise<MallGoodCommentPaginateWidthCursorResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/good-comment/pageByCursor',
            query: {
                'count': count,
                'afterId': afterId,
                'goodId': goodId,
            },
        });
    }

    /**
     * 分页
     * @returns MallGoodCommentPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
        goodId,
    }: {
        pageNo: number,
        pageSize: number,
        goodId: string,
    }): CancelablePromise<MallGoodCommentPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/good-comment/page',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'goodId': goodId,
            },
        });
    }

}
