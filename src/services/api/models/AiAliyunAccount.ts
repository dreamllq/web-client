/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type AiAliyunAccount = {
    id: string;
    /**
     * Access Key
     */
    accessKey: string;
    /**
     * 名称
     */
    name: string;
    /**
     * Secret Key
     */
    secretKey: string;
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

