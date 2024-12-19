/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiBaiduSessionGetAllResponse } from '../models/AiBaiduSessionGetAllResponse';
import type { AiBaiduSessionGetResponse } from '../models/AiBaiduSessionGetResponse';
import type { AiBaiduSessionPaginateResponse } from '../models/AiBaiduSessionPaginateResponse';
import type { CreateAiBaiduSessionDto } from '../models/CreateAiBaiduSessionDto';
import type { DeleteSuccessResult } from '../models/DeleteSuccessResult';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';
import type { UpdateAiBaiduSessionDto } from '../models/UpdateAiBaiduSessionDto';
import type { UpdateSuccessResult } from '../models/UpdateSuccessResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AiBaiduSessionService {
    /**
     * 新增会话
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateAiBaiduSessionDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai/baidu/session',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取所有会话
     * @returns AiBaiduSessionGetAllResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<AiBaiduSessionGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/baidu/session',
        });
    }
    /**
     * 获取分页会话
     * @returns AiBaiduSessionPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
    }: {
        pageNo: number,
        pageSize: number,
    }): CancelablePromise<AiBaiduSessionPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/baidu/session/paginate',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * 获取指定id会话
     * @returns AiBaiduSessionGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: string,
    }): CancelablePromise<AiBaiduSessionGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/baidu/session/{id}',
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
        requestBody: UpdateAiBaiduSessionDto,
    }): CancelablePromise<UpdateSuccessResult> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/ai/baidu/session/{id}',
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
            url: '/api/ai/baidu/session/{id}',
            path: {
                'id': id,
            },
        });
    }
}
