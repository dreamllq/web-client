/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Area } from './Area';
import type { User } from './User';

export type Address = {
    id: string;
    name: string;
    mobile: string;
    country: number;
    province: Area;
    city: Area;
    region: Area;
    address: string;
    isDefault: boolean;
    user: User;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};

