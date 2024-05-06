/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WeixinPlatformUserPaginateResponse } from '../models/WeixinPlatformUserPaginateResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WeixinPlatformUserService {

    /**
     * @returns WeixinPlatformUserPaginateResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
        weixinId,
    }: {
        pageNo: number,
        pageSize: number,
        weixinId: string,
    }): CancelablePromise<WeixinPlatformUserPaginateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin-platform-user/paginate',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'weixinId': weixinId,
            },
        });
    }

}
