/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileDetail } from './FileDetail';
import type { PathType } from './PathType';
import type { User } from './User';

export type F = {
    id: string;
    name: string;
    /**
     * 路径类型
     */
    pathType: PathType;
    parent: F;
    children: Array<F>;
    fileDetail: FileDetail;
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

