/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileGetResponse } from '../models/FileGetResponse';
import type { FilesUploadDto } from '../models/FilesUploadDto';
import type { FileUploadDto } from '../models/FileUploadDto';
import type { FileUploadResponse } from '../models/FileUploadResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FileService {
    /**
     * @returns FileUploadResponse
     * @throws ApiError
     */
    public static uploadFile({
        formData,
    }: {
        formData: FileUploadDto,
    }): CancelablePromise<FileUploadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/file/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static uploadFiles({
        formData,
    }: {
        formData: FilesUploadDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/file/uploads',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * 获取id文件信息
     * @returns FileGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: any,
    }): CancelablePromise<FileGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/file/{id}',
            path: {
                'id': id,
            },
        });
    }
}
