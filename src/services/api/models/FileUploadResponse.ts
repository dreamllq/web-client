/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UploadFileInfo } from './UploadFileInfo';

export type FileUploadResponse = {
    code: number;
    message: string;
    data: UploadFileInfo;
};
