/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiAliyunAccount } from './AiAliyunAccount';
import type { AiAliyunOcrRecognizeAllText } from './AiAliyunOcrRecognizeAllText';
import type { User } from './User';
export type AiAliyunOcr = {
    id: string;
    /**
     * ocr任务名称
     */
    name: string;
    account: AiAliyunAccount;
    /**
     * 操作类型
     */
    type: string;
    recognizeAllText: AiAliyunOcrRecognizeAllText;
    creator: User;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};

