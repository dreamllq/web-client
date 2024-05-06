/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MallGoodGroup } from './MallGoodGroup';
import type { MallShop } from './MallShop';
import type { User } from './User';

export type MallGood = {
    id: string;
    title: string;
    desc: string;
    group: MallGoodGroup;
    headimg: string;
    /**
     * 单位分
     */
    price: number;
    images: Array<string>;
    detail: string;
    shop: MallShop;
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

