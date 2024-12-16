/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { File } from './File';

export type AiBaiduOrcGeneralScenarios = {
    id: string;
    file: File;
    /**
     * 识别文件页码
     */
    fileNumber: number;
    /**
     * 图片类型
     */
    type: string;
    /**
     * ocr识别结果
     */
    result: string;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};

