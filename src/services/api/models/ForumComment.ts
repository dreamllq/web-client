/* generated using openapi-typescript-codegen -- do not edit */
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
    post: ForumPost;
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

