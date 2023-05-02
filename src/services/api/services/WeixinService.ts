/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SuccessResult } from '../models/SuccessResult';
import type { WeixinCreateDto } from '../models/WeixinCreateDto';
import type { WeixinGetAllResponse } from '../models/WeixinGetAllResponse';
import type { WeixinGetSuccessResponse } from '../models/WeixinGetSuccessResponse';
import type { WeixinPaginateSuccessResponse } from '../models/WeixinPaginateSuccessResponse';
import type { WeixinUpdateDto } from '../models/WeixinUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WeixinService {

    /**
     * 获取所有微信应用数据
     * @returns WeixinGetAllResponse 
     * @throws ApiError
     */
    public static getAll({
type,
}: {
type: 'app' | 'mp' | 'web' | 'official_account',
}): CancelablePromise<WeixinGetAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin',
            query: {
                'type': type,
            },
        });
    }

    /**
     * 创建微信应用
     * @returns SuccessResult 
     * @throws ApiError
     */
    public static create({
requestBody,
}: {
requestBody: WeixinCreateDto,
}): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/weixin',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取分页微信应用数据
     * @returns WeixinPaginateSuccessResponse 
     * @throws ApiError
     */
    public static paginate({
pageNo,
pageSize,
name,
}: {
pageNo: number,
pageSize: number,
/**
 * 应用名称
 */
name?: string,
}): CancelablePromise<WeixinPaginateSuccessResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin/page',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'name': name,
            },
        });
    }

    /**
     * 删除微信应用
     * @returns SuccessResult 
     * @throws ApiError
     */
    public static remove({
id,
}: {
id: string,
}): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/weixin/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 获取指定id微信应用数据
     * @returns WeixinGetSuccessResponse 
     * @throws ApiError
     */
    public static get({
id,
}: {
id: string,
}): CancelablePromise<WeixinGetSuccessResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/weixin/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 更新指定id微信应用数据
     * @returns SuccessResult 
     * @throws ApiError
     */
    public static update({
id,
requestBody,
}: {
id: string,
requestBody: WeixinUpdateDto,
}): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/weixin/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
