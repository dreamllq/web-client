/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MallShopCreateDto } from '../models/MallShopCreateDto';
import type { MallShopGetAllResponse } from '../models/MallShopGetAllResponse';
import type { MallShopGetResponse } from '../models/MallShopGetResponse';
import type { MallShopPaginateResponse } from '../models/MallShopPaginateResponse';
import type { MallShopUpdateDto } from '../models/MallShopUpdateDto';
import type { SuccessResult } from '../models/SuccessResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MallShopService {
    /**
     * 创建店铺
     * @returns SuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: MallShopCreateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/mall/shop',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取所有店铺
     * @returns MallShopGetAllResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<MallShopGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/shop',
        });
    }
    /**
     * 删除店铺
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
            url: '/api/mall/shop/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 更新店铺
     * @returns SuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        id: any,
        requestBody: MallShopUpdateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/mall/shop/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取单个店铺
     * @returns MallShopGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: any,
    }): CancelablePromise<MallShopGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/shop/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 获取分页数据
     * @returns MallShopPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
        name,
    }: {
        pageNo: number,
        pageSize: number,
        name: string,
    }): CancelablePromise<MallShopPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/mall/shop/paginate',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'name': name,
            },
        });
    }
}
