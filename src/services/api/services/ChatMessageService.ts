/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatMessageCreateDto } from '../models/ChatMessageCreateDto';
import type { ChatMessageGetResponse } from '../models/ChatMessageGetResponse';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChatMessageService {

    /**
     * 发送聊天
     * @returns SuccessResult 
     * @throws ApiError
     */
    public static create({
requestBody,
}: {
requestBody: ChatMessageCreateDto,
}): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/chat/message',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 游标分页
     * @returns ChatMessageGetResponse 
     * @throws ApiError
     */
    public static findWithCursor({
contactsId,
direction,
fromId,
}: {
contactsId: string,
direction: 'forward' | 'backward',
fromId?: string,
}): CancelablePromise<ChatMessageGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/chat/message/cursor',
            query: {
                'contactsId': contactsId,
                'fromId': fromId,
                'direction': direction,
            },
        });
    }

}
