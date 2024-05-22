/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AiServiceType } from './AiServiceType';
import type { User } from './User';

export type AiAliyunService = {
    id: string;
    /**
     * 服务名称
     */
    name: string;
    /**
     * 接口endpoint
     */
    endpoint: string;
    /**
     * 接口path
     */
    path: string;
    type: AiServiceType;
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

