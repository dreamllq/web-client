/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MallGood } from './MallGood';
import type { User } from './User';

export type MallGoodComment = {
    id: string;
    creator: User;
    good: MallGood;
    content: string;
    images: Array<string>;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};
