/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiAliyunServiceGetAllResponse } from '../models/AiAliyunServiceGetAllResponse';
import type { AiAliyunServiceGetResponse } from '../models/AiAliyunServiceGetResponse';
import type { AiAliyunServicePaginateResponse } from '../models/AiAliyunServicePaginateResponse';
import type { CreateAiAliyunServiceDto } from '../models/CreateAiAliyunServiceDto';
import type { DeleteSuccessResult } from '../models/DeleteSuccessResult';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';
import type { UpdateAiAliyunServiceDto } from '../models/UpdateAiAliyunServiceDto';
import type { UpdateSuccessResult } from '../models/UpdateSuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AiAliyunServiceService {

    /**
     * 新增服务
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateAiAliyunServiceDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai/aliyun/service',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取所有服务
     * @returns AiAliyunServiceGetAllResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<AiAliyunServiceGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/aliyun/service',
        });
    }

    /**
     * 获取分页服务
     * @returns AiAliyunServicePaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
    }: {
        pageNo: number,
        pageSize: number,
    }): CancelablePromise<AiAliyunServicePaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/aliyun/service/paginate',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * 获取指定id服务
     * @returns AiAliyunServiceGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: string,
    }): CancelablePromise<AiAliyunServiceGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/aliyun/service/{id}',
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
        requestBody: UpdateAiAliyunServiceDto,
    }): CancelablePromise<UpdateSuccessResult> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/ai/aliyun/service/{id}',
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
            url: '/api/ai/aliyun/service/{id}',
            path: {
                'id': id,
            },
        });
    }

}
