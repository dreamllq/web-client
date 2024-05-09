/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AiBaiduSession } from './AiBaiduSession';

export type AiBaiduMessage = {
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
    session: AiBaiduSession;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};

