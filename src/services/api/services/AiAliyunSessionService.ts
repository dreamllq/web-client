/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiAliyunSessionGetAllResponse } from '../models/AiAliyunSessionGetAllResponse';
import type { AiAliyunSessionGetResponse } from '../models/AiAliyunSessionGetResponse';
import type { AiAliyunSessionPaginateResponse } from '../models/AiAliyunSessionPaginateResponse';
import type { CreateAiAliyunSessionDto } from '../models/CreateAiAliyunSessionDto';
import type { DeleteSuccessResult } from '../models/DeleteSuccessResult';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';
import type { UpdateAiAliyunSessionDto } from '../models/UpdateAiAliyunSessionDto';
import type { UpdateSuccessResult } from '../models/UpdateSuccessResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AiAliyunSessionService {
    /**
     * 新增会话
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateAiAliyunSessionDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai/aliyun/session',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取所有会话
     * @returns AiAliyunSessionGetAllResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<AiAliyunSessionGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/aliyun/session',
        });
    }
    /**
     * 获取分页会话
     * @returns AiAliyunSessionPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
    }: {
        pageNo: number,
        pageSize: number,
    }): CancelablePromise<AiAliyunSessionPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/aliyun/session/paginate',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * 获取指定id会话
     * @returns AiAliyunSessionGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: string,
    }): CancelablePromise<AiAliyunSessionGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/aliyun/session/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 更新指定id会话
     * @returns UpdateSuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateAiAliyunSessionDto,
    }): CancelablePromise<UpdateSuccessResult> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/ai/aliyun/session/{id}',
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
            url: '/api/ai/aliyun/session/{id}',
            path: {
                'id': id,
            },
        });
    }
}
