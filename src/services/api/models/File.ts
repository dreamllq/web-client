/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileBuffer } from './FileBuffer';

export type File = {
    id: string;
    content: FileBuffer;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};
