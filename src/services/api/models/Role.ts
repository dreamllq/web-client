/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Resource } from './Resource';

export type Role = {
    /**
     * 角色id
     */
    id: string;
    /**
     * 角色名称
     */
    name: string;
    /**
     * 角色描述
     */
    desc: string;
    /**
     * 资源列表
     */
    resources: Array<Resource>;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};
