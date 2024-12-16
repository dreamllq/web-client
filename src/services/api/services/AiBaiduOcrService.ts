/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiBaiduOcrGetAllResponse } from '../models/AiBaiduOcrGetAllResponse';
import type { AiBaiduOcrGetResponse } from '../models/AiBaiduOcrGetResponse';
import type { AiBaiduOcrPaginateResponse } from '../models/AiBaiduOcrPaginateResponse';
import type { CreateAiBaiduOcrDto } from '../models/CreateAiBaiduOcrDto';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AiBaiduOcrService {

    /**
     * 新增ocr任务
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateAiBaiduOcrDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai/baidu/ocr',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取所有ocr任务
     * @returns AiBaiduOcrGetAllResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<AiBaiduOcrGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/baidu/ocr',
        });
    }

    /**
     * 获取分页ocr任务
     * @returns AiBaiduOcrPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
    }: {
        pageNo: number,
        pageSize: number,
    }): CancelablePromise<AiBaiduOcrPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/baidu/ocr/paginate',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * 获取指定id ocr任务
     * @returns AiBaiduOcrGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: string,
    }): CancelablePromise<AiBaiduOcrGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/baidu/ocr/{id}',
            path: {
                'id': id,
            },
        });
    }

}
