/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { Password } from './Password';
import type { Role } from './Role';
import type { WeixinPlatformUser } from './WeixinPlatformUser';

export type User = {
    /**
     * 用户id
     */
    id: string;
    /**
     * 用户名
     */
    username: string;
    password: Password;
    /**
     * 昵称
     */
    nickName: string;
    headimg: string;
    /**
     * 手机号
     */
    mobile: string;
    /**
     * 是否活跃
     */
    isActive: boolean;
    /**
     * 是否为超级管理员
     */
    isSuper: number;
    /**
     * 角色
     */
    roles: Array<Role>;
    weixinPlatformUsers: Array<WeixinPlatformUser>;
    addresses: Array<Address>;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};
