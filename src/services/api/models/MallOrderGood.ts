/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MallGood } from './MallGood';
import type { MallOrder } from './MallOrder';

export type MallOrderGood = {
    id: string;
    order: MallOrder;
    good: MallGood;
    count: number;
    price: number;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};
