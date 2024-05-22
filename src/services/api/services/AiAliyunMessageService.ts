/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiAliyunAccountGetHistoryResponse } from '../models/AiAliyunAccountGetHistoryResponse';
import type { CreateAiAliyunMessageDto } from '../models/CreateAiAliyunMessageDto';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AiAliyunMessageService {

    /**
     * 新增消息
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateAiAliyunMessageDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai/aliyun/message',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取历史消息
     * @returns AiAliyunAccountGetHistoryResponse
     * @throws ApiError
     */
    public static getHistory({
        sessionId,
    }: {
        /**
         * sessionId
         */
        sessionId: string,
    }): CancelablePromise<AiAliyunAccountGetHistoryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/aliyun/message',
            query: {
                'sessionId': sessionId,
            },
        });
    }

}
