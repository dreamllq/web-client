/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiBaiduAccountGetHistoryResponse } from '../models/AiBaiduAccountGetHistoryResponse';
import type { CreateAiBaiduMessageDto } from '../models/CreateAiBaiduMessageDto';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AiBaiduMessageService {

    /**
     * 新增百度消息
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateAiBaiduMessageDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai/baidu/message',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取历史消息
     * @returns AiBaiduAccountGetHistoryResponse
     * @throws ApiError
     */
    public static getHistory({
        sessionId,
    }: {
        /**
         * sessionId
         */
        sessionId: string,
    }): CancelablePromise<AiBaiduAccountGetHistoryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/baidu/message',
            query: {
                'sessionId': sessionId,
            },
        });
    }

}
