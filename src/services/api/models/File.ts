/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileBuffer } from './FileBuffer';
export type File = {
    id: string;
    /**
     * 名称
     */
    name: string;
    /**
     * 文件原名
     */
    originFileName: string;
    /**
     * 扩展名
     */
    ext: string;
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

