/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AiAliyunAccount } from './AiAliyunAccount';
import type { AiAliyunService } from './AiAliyunService';
import type { User } from './User';

export type AiAliyunSession = {
    id: string;
    /**
     * 会话名称
     */
    name: string;
    account: AiAliyunAccount;
    service: AiAliyunService;
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

