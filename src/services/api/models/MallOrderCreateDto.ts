/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GoodInfo } from './GoodInfo';

export type MallOrderCreateDto = {
    addressId: string;
    goods: Array<GoodInfo>;
};

