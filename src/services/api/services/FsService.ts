/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFDto } from '../models/CreateFDto';
import type { DeleteSuccessResult } from '../models/DeleteSuccessResult';
import type { FGetAllResponse } from '../models/FGetAllResponse';
import type { FGetResponse } from '../models/FGetResponse';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';
import type { UpdateFDto } from '../models/UpdateFDto';
import type { UpdateSuccessResult } from '../models/UpdateSuccessResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FsService {
    /**
     * 新增服务
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateFDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/fs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取所有服务
     * @returns FGetAllResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<FGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/fs',
        });
    }
    /**
     * 获取子节点
     * @returns FGetAllResponse
     * @throws ApiError
     */
    public static getChildren({
        id,
    }: {
        id: string,
    }): CancelablePromise<FGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/fs/children/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 获取指定id服务
     * @returns FGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: string,
    }): CancelablePromise<FGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/fs/{id}',
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
        requestBody: UpdateFDto,
    }): CancelablePromise<UpdateSuccessResult> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/fs/{id}',
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
            url: '/api/fs/{id}',
            path: {
                'id': id,
            },
        });
    }
}
