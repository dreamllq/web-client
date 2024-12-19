/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WeixinPlatformUser } from './WeixinPlatformUser';
export type Weixin = {
    id: string;
    name: string;
    appid: string;
    appSecret: string;
    appType: Weixin.appType;
    weixinPlatformUsers?: Array<WeixinPlatformUser>;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};
export namespace Weixin {
    export enum appType {
        APP = 'app',
        MP = 'mp',
        WEB = 'web',
        OFFICIAL_ACCOUNT = 'official_account',
    }
}

