/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiBaiduAccountGetResponse } from '../models/AiBaiduAccountGetResponse';
import type { AiBaiduAccountPaginateResponse } from '../models/AiBaiduAccountPaginateResponse';
import type { CreateAiBaiduAccountDto } from '../models/CreateAiBaiduAccountDto';
import type { DeleteSuccessResult } from '../models/DeleteSuccessResult';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';
import type { UpdateAiBaiduAccountDto } from '../models/UpdateAiBaiduAccountDto';
import type { UpdateSuccessResult } from '../models/UpdateSuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AiBaiduAccountService {

    /**
     * 新增百度账号信息
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateAiBaiduAccountDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai/baidu/account',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取所有报读账号信息
     * @returns any
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/baidu/account',
        });
    }

    /**
     * 获取分页百度账号信息
     * @returns AiBaiduAccountPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
    }: {
        pageNo: number,
        pageSize: number,
    }): CancelablePromise<AiBaiduAccountPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/baidu/account/paginate',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * 获取指定id百度账号信息
     * @returns AiBaiduAccountGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: string,
    }): CancelablePromise<AiBaiduAccountGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/baidu/account/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 更新指定id百度账号信息
     * @returns UpdateSuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateAiBaiduAccountDto,
    }): CancelablePromise<UpdateSuccessResult> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/ai/baidu/account/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 删除百度账号信息
     * @returns DeleteSuccessResult
     * @throws ApiError
     */
    public static remove({
        id,
    }: {
        id: string,
    }): CancelablePromise<DeleteSuccessResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/ai/baidu/account/{id}',
            path: {
                'id': id,
            },
        });
    }

}
