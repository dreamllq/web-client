/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateUsersDto = {
    /**
     * 用户名
     */
    username?: string;
    /**
     * 昵称
     */
    nickName?: string;
    /**
     * 用户密码
     */
    password?: string;
    mobile?: string;
    headimg?: string;
    /**
     * 角色列表
     */
    roleIds?: Array<string>;
};

