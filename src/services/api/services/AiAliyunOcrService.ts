/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiAliyunOcrGetAllResponse } from '../models/AiAliyunOcrGetAllResponse';
import type { AiAliyunOcrGetResponse } from '../models/AiAliyunOcrGetResponse';
import type { AiAliyunOcrPaginateResponse } from '../models/AiAliyunOcrPaginateResponse';
import type { CreateAiAliyunOcrDto } from '../models/CreateAiAliyunOcrDto';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AiAliyunOcrService {

    /**
     * 新增ocr任务
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateAiAliyunOcrDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai/aliyun/ocr',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取所有ocr任务
     * @returns AiAliyunOcrGetAllResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<AiAliyunOcrGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/aliyun/ocr',
        });
    }

    /**
     * 获取分页ocr任务
     * @returns AiAliyunOcrPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
    }: {
        pageNo: number,
        pageSize: number,
    }): CancelablePromise<AiAliyunOcrPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/aliyun/ocr/paginate',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * 获取指定id ocr任务
     * @returns AiAliyunOcrGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: string,
    }): CancelablePromise<AiAliyunOcrGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/aliyun/ocr/{id}',
            path: {
                'id': id,
            },
        });
    }

}
