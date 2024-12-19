/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SuccessResult } from '../models/SuccessResult';
import type { WeixinPayCreateDto } from '../models/WeixinPayCreateDto';
import type { WeixinPayGetResponse } from '../models/WeixinPayGetResponse';
import type { WeixinPayPaginateResponse } from '../models/WeixinPayPaginateResponse';
import type { WeixinPayUpdateDto } from '../models/WeixinPayUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WeixinPayService {
    /**
     * 创建支付配置
     * @returns SuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: WeixinPayCreateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/weixin/pay',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取所有数据
     * @returns WeixinPayGetResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<WeixinPayGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin/pay',
        });
    }
    /**
     * 删除支付配置
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
            url: '/api/weixin/pay/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 更新支付配置
     * @returns SuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        id: any,
        requestBody: WeixinPayUpdateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/weixin/pay/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * id数据
     * @returns WeixinPayGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: any,
    }): CancelablePromise<WeixinPayGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin/pay/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 分页
     * @returns WeixinPayPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
    }: {
        pageNo: number,
        pageSize: number,
    }): CancelablePromise<WeixinPayPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin/pay/page',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
            },
        });
    }
}
