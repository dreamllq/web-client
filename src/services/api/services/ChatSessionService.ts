/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatSessionCreateDto } from '../models/ChatSessionCreateDto';
import type { ChatSessionCreateResponse } from '../models/ChatSessionCreateResponse';
import type { ChatSessionGetResponse } from '../models/ChatSessionGetResponse';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChatSessionService {

    /**
     * 添加聊天会话
     * @returns ChatSessionCreateResponse 
     * @throws ApiError
     */
    public static create({
requestBody,
}: {
requestBody: ChatSessionCreateDto,
}): CancelablePromise<ChatSessionCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/chat/session',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取所有联系人
     * @returns ChatSessionGetResponse 
     * @throws ApiError
     */
    public static get(): CancelablePromise<ChatSessionGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/chat/session',
        });
    }

    /**
     * 删除聊天会话
     * @returns SuccessResult 
     * @throws ApiError
     */
    public static remove({
id,
}: {
id: any,
}): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/chat/session/{id}',
            path: {
                'id': id,
            },
        });
    }

}
