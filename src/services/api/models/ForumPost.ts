/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForumComment } from './ForumComment';
import type { ForumPostRelation } from './ForumPostRelation';
import type { ForumSection } from './ForumSection';
import type { User } from './User';

export type ForumPost = {
    id: string;
    title: string;
    content: string;
    images: Array<string>;
    creator: User;
    section: ForumSection;
    comments: Array<ForumComment>;
    zans: Array<ForumPostRelation>;
    collects: Array<ForumPostRelation>;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};

