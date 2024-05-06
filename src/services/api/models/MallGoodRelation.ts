/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MallGood } from './MallGood';
import type { User } from './User';

export type MallGoodRelation = {
    id: string;
    user: User;
    good: MallGood;
    type: MallGoodRelation.type;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};

export namespace MallGoodRelation {

    export enum type {
        UNKNOWN = 'unknown',
        COLLECT = 'collect',
    }


}

