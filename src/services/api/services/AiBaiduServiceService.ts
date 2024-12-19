/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiBaiduServiceGetAllResponse } from '../models/AiBaiduServiceGetAllResponse';
import type { AiBaiduServiceGetResponse } from '../models/AiBaiduServiceGetResponse';
import type { AiBaiduServicePaginateResponse } from '../models/AiBaiduServicePaginateResponse';
import type { CreateAiBaiduServiceDto } from '../models/CreateAiBaiduServiceDto';
import type { DeleteSuccessResult } from '../models/DeleteSuccessResult';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';
import type { UpdateAiBaiduServiceDto } from '../models/UpdateAiBaiduServiceDto';
import type { UpdateSuccessResult } from '../models/UpdateSuccessResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AiBaiduServiceService {
    /**
     * 新增服务
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateAiBaiduServiceDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai/baidu/service',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取所有服务
     * @returns AiBaiduServiceGetAllResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<AiBaiduServiceGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/baidu/service',
        });
    }
    /**
     * 获取分页服务
     * @returns AiBaiduServicePaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
    }: {
        pageNo: number,
        pageSize: number,
    }): CancelablePromise<AiBaiduServicePaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/baidu/service/paginate',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * 获取指定id服务
     * @returns AiBaiduServiceGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: string,
    }): CancelablePromise<AiBaiduServiceGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/baidu/service/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 更新指定id服务
     * @returns UpdateSuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateAiBaiduServiceDto,
    }): CancelablePromise<UpdateSuccessResult> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/ai/baidu/service/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除服务
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
            url: '/api/ai/baidu/service/{id}',
            path: {
                'id': id,
            },
        });
    }
}
