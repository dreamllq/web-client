/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageSendDto } from '../models/MessageSendDto';
import type { SuccessResult } from '../models/SuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MessageService {

    /**
     * 发送消息
     * @returns SuccessResult 
     * @throws ApiError
     */
    public static send({
requestBody,
}: {
requestBody: MessageSendDto,
}): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/message/send',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
