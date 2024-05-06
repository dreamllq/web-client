/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { MallOrderGood } from './MallOrderGood';
import type { User } from './User';

export type MallOrder = {
    id: string;
    creator: User;
    address: Address;
    goods: Array<MallOrderGood>;
    status: number;
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

