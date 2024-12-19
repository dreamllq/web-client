/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AliyunOcrOperates } from './AliyunOcrOperates';
import type { RecognizeAllText } from './RecognizeAllText';
export type CreateAiAliyunOcrDto = {
    /**
     * 名称
     */
    name: string;
    /**
     * 账号信息
     */
    accountId: string;
    /**
     * 操作方法
     */
    type: AliyunOcrOperates;
    recognizeAllText: RecognizeAllText;
};

