/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSuperAdminDto } from '../models/CreateSuperAdminDto';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InitializationService {

    /**
     * 创建超级管理员
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static createSuperAdmin({
        requestBody,
    }: {
        requestBody: CreateSuperAdminDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/initialization/create-super-admin',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
