/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForumPost } from './ForumPost';
import type { User } from './User';

export type ForumSection = {
    id: string;
    name: string;
    desc: string;
    creator: User;
    posts: Array<ForumPost>;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};
