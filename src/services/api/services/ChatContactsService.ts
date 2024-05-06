/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatContactsCreateDto } from '../models/ChatContactsCreateDto';
import type { ChatContactsGetResponse } from '../models/ChatContactsGetResponse';
import type { ChatContactsUpdateDto } from '../models/ChatContactsUpdateDto';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChatContactsService {

    /**
     * 添加联系人
     * @returns SuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: ChatContactsCreateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/chat/contacts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取所有联系人
     * @returns ChatContactsGetResponse
     * @throws ApiError
     */
    public static get(): CancelablePromise<ChatContactsGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/chat/contacts',
        });
    }

    /**
     * 删除联系人
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
            url: '/api/chat/contacts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 更新联系人
     * @returns SuccessResult
     * @throws ApiError
     */
    public static updateStatus({
        id,
        requestBody,
    }: {
        id: any,
        requestBody: ChatContactsUpdateDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/chat/contacts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
