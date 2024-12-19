/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateResourceDto } from '../models/CreateResourceDto';
import type { DeleteSuccessResult } from '../models/DeleteSuccessResult';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';
import type { ResourceGetAllSuccessResult } from '../models/ResourceGetAllSuccessResult';
import type { ResourceGetSuccessResult } from '../models/ResourceGetSuccessResult';
import type { ResourcePaginateSuccessResult } from '../models/ResourcePaginateSuccessResult';
import type { UpdateResourceDto } from '../models/UpdateResourceDto';
import type { UpdateSuccessResult } from '../models/UpdateSuccessResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * 获取资源所有数据
     * @returns ResourceGetAllSuccessResult
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<ResourceGetAllSuccessResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/resources',
        });
    }
    /**
     * 创建资源
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateResourceDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/resources',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取资源分页数据
     * @returns ResourcePaginateSuccessResult
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
        name,
    }: {
        pageNo: number,
        pageSize: number,
        /**
         * 资源名
         */
        name?: string,
    }): CancelablePromise<ResourcePaginateSuccessResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/resources/page',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'name': name,
            },
        });
    }
    /**
     * 获取指定id资源数据
     * @returns ResourceGetSuccessResult
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        /**
         * 资源id
         */
        id: any,
    }): CancelablePromise<ResourceGetSuccessResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/resources/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 删除资源
     * @returns DeleteSuccessResult
     * @throws ApiError
     */
    public static remove({
        id,
    }: {
        /**
         * 资源id
         */
        id: any,
    }): CancelablePromise<DeleteSuccessResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/resources/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 更新指定资源的所有数据
     * @returns UpdateSuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        /**
         * 资源id
         */
        id: any,
        requestBody: UpdateResourceDto,
    }): CancelablePromise<UpdateSuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/resources/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
