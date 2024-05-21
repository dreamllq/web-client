/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Buffer } from './Buffer';

export type FileBuffer = {
    id: string;
    /**
     * buffer
     */
    buffer: Buffer;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};

