/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SmsTestDto } from '../models/SmsTestDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SmsService {

    /**
     * sms测试
     * @returns any 
     * @throws ApiError
     */
    public static test({
requestBody,
}: {
requestBody: SmsTestDto,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sms/test',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 发送验证码
     * @returns any 
     * @throws ApiError
     */
    public static sendCode({
type,
phone,
}: {
type: 'login' | 'bind-mobile',
phone: any,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sms/{type}/{phone}',
            path: {
                'type': type,
                'phone': phone,
            },
        });
    }

}
