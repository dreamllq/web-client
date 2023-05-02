/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type MallGoodGroup = {
    id: string;
    name: string;
    headimg: string;
    parent: MallGoodGroup;
    children: Array<MallGoodGroup>;
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
