/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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

}
