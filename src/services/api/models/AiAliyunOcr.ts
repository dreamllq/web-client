/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AiAliyunAccount } from './AiAliyunAccount';
import type { AiAliyunOcrRecognizeAllText } from './AiAliyunOcrRecognizeAllText';
import type { User } from './User';

export type AiAliyunOcr = {
    id: string;
    account: AiAliyunAccount;
    /**
     * 图片类型
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

