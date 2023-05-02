/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MallGood } from './MallGood';
import type { User } from './User';

export type MallCart = {
    id: string;
    user: User;
    good: MallGood;
    count: number;
    checked: boolean;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};
