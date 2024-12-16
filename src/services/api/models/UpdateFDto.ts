/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PathType } from './PathType';

export type UpdateFDto = {
    name?: string;
    parentId?: string;
    /**
     * 路径类型
     */
    pathType?: PathType;
    fileDetail?: any;
};

