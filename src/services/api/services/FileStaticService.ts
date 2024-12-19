/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FileStaticService {
    /**
     * @returns binary 返回指定ID的图片
     * @throws ApiError
     */
    public static view({
        id,
    }: {
        id: any,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/file/static/{id}',
            path: {
                'id': id,
            },
        });
    }
}
