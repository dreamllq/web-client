/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiAliyunAccountGetAllResponse } from '../models/AiAliyunAccountGetAllResponse';
import type { AiAliyunAccountGetResponse } from '../models/AiAliyunAccountGetResponse';
import type { AiAliyunAccountPaginateResponse } from '../models/AiAliyunAccountPaginateResponse';
import type { CreateAiAliyunAccountDto } from '../models/CreateAiAliyunAccountDto';
import type { DeleteSuccessResult } from '../models/DeleteSuccessResult';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';
import type { UpdateAiAliyunAccountDto } from '../models/UpdateAiAliyunAccountDto';
import type { UpdateSuccessResult } from '../models/UpdateSuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AiAliyunAccountService {

    /**
     * 新增阿里云账号信息
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateAiAliyunAccountDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai/aliyun/account',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取所有阿里云账号信息
     * @returns AiAliyunAccountGetAllResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<AiAliyunAccountGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/aliyun/account',
        });
    }

    /**
     * 获取分页阿里云账号信息
     * @returns AiAliyunAccountPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
    }: {
        pageNo: number,
        pageSize: number,
    }): CancelablePromise<AiAliyunAccountPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/aliyun/account/paginate',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * 获取指定id百度账号信息
     * @returns AiAliyunAccountGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: string,
    }): CancelablePromise<AiAliyunAccountGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/aliyun/account/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 更新指定id阿里云账号信息
     * @returns UpdateSuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateAiAliyunAccountDto,
    }): CancelablePromise<UpdateSuccessResult> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/ai/aliyun/account/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 删除阿里云账号信息
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
            url: '/api/ai/aliyun/account/{id}',
            path: {
                'id': id,
            },
        });
    }

}
