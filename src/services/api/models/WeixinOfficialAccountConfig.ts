/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Weixin } from './Weixin';

export type WeixinOfficialAccountConfig = {
    id: string;
    token: string;
    encodingAesKey: string;
    checkSignature: boolean;
    weixin?: Weixin;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};

