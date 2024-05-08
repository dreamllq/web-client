/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AiBaiduAccount } from './AiBaiduAccount';
import type { AiBaiduService } from './AiBaiduService';
import type { User } from './User';

export type AiBaiduSession = {
    id: string;
    /**
     * 会话名称
     */
    name: string;
    account: AiBaiduAccount;
    service: AiBaiduService;
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

