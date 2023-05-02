/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForumPost } from './ForumPost';
import type { User } from './User';

export type ForumPostRelation = {
    id: string;
    creator: User;
    post: ForumPost;
    type: ForumPostRelation.type;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};

export namespace ForumPostRelation {

    export enum type {
        UNKNOWN = 'unknown',
        ZAN = 'zan',
        COLLECT = 'collect',
    }


}
