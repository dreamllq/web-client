/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AiAliyunSession } from './AiAliyunSession';

export type AiAliyunMessage = {
    id: string;
    /**
     * role
     */
    role: string;
    /**
     * content
     */
    content: string;
    /**
     * queueId
     */
    qid: string;
    /**
     * 状态
     */
    status: string;
    session: AiAliyunSession;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};

