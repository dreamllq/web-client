/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiServiceTypeGetAllResponse } from '../models/AiServiceTypeGetAllResponse';
import type { AiServiceTypeGetResponse } from '../models/AiServiceTypeGetResponse';
import type { CreateAiServiceTypeDto } from '../models/CreateAiServiceTypeDto';
import type { DeleteSuccessResult } from '../models/DeleteSuccessResult';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';
import type { UpdateAiServiceTypeDto } from '../models/UpdateAiServiceTypeDto';
import type { UpdateSuccessResult } from '../models/UpdateSuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AiCommonServiceTypeService {

    /**
     * 新增服务类型
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateAiServiceTypeDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai/common/service-type',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取所有ai服务类型
     * @returns AiServiceTypeGetAllResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<AiServiceTypeGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/common/service-type',
        });
    }

    /**
     * 获取指定id服务类型
     * @returns AiServiceTypeGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: string,
    }): CancelablePromise<AiServiceTypeGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/common/service-type/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 更新指定id服务类型
     * @returns UpdateSuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateAiServiceTypeDto,
    }): CancelablePromise<UpdateSuccessResult> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/ai/common/service-type/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 删除服务类型
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
            url: '/api/ai/common/service-type/{id}',
            path: {
                'id': id,
            },
        });
    }

}
