/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { File } from './File';

export type FileDetail = {
    id: string;
    file: File;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};

