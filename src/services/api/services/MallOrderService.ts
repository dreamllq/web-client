/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MallOrderCreateDto } from '../models/MallOrderCreateDto';
import type { MallOrderGetResponse } from '../models/MallOrderGetResponse';
import type { MallOrderPageWidthCursorResponse } from '../models/MallOrderPageWidthCursorResponse';
import type { MallOrderPaginateResponse } from '../models/MallOrderPaginateResponse';
import type { SuccessResult } from '../models/SuccessResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MallOrderService {
    /**
     * 创建订单
     * @returns SuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: MallOrderCreateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/mall/order',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 订单登录用户游标分页
     * @returns MallOrderPageWidthCursorResponse
     * @throws ApiError
     */
    public static paginateWidthCursorSession({
        count,
        afterId,
    }: {
        count: number,
        afterId: string,
    }): CancelablePromise<MallOrderPageWidthCursorResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/order/pageByCursor/session',
            query: {
                'count': count,
                'afterId': afterId,
            },
        });
    }
    /**
     * 订单分页
     * @returns MallOrderPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
    }: {
        pageNo: number,
        pageSize: number,
    }): CancelablePromise<MallOrderPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/order/page',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * 获取订单
     * @returns MallOrderGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: any,
    }): CancelablePromise<MallOrderGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/order/{id}',
            path: {
                'id': id,
            },
        });
    }
}
