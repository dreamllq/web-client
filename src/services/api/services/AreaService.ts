/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AreaResponse } from '../models/AreaResponse';
import type { TreeDataResponse } from '../models/TreeDataResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AreaService {

    /**
     * 获取省份列表
     * @returns AreaResponse
     * @throws ApiError
     */
    public static getProvinces({
        countryId,
    }: {
        countryId: any,
    }): CancelablePromise<AreaResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/area/provinces',
            query: {
                'countryId': countryId,
            },
        });
    }

    /**
     * 获取城市列表
     * @returns AreaResponse
     * @throws ApiError
     */
    public static getCities({
        provinceId,
    }: {
        provinceId: any,
    }): CancelablePromise<AreaResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/area/cities',
            query: {
                'provinceId': provinceId,
            },
        });
    }

    /**
     * 获取区列表
     * @returns AreaResponse
     * @throws ApiError
     */
    public static getRegions({
        cityId,
    }: {
        cityId: any,
    }): CancelablePromise<AreaResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/area/regions',
            query: {
                'cityId': cityId,
            },
        });
    }

    /**
     * 获取省市区结构
     * @returns TreeDataResponse
     * @throws ApiError
     */
    public static getTreeData(): CancelablePromise<TreeDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/area/treeData',
        });
    }

}
