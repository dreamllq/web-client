/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForumPost } from './ForumPost';
import type { User } from './User';

export type ForumComment = {
    id: string;
    content: string;
    images: Array<string>;
    to: ForumComment;
    creator: User;
    post: ForumPost;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};
