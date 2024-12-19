/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressCreateSessionDto } from '../models/AddressCreateSessionDto';
import type { AddressGetAllSessionResponse } from '../models/AddressGetAllSessionResponse';
import type { AddressGetResponse } from '../models/AddressGetResponse';
import type { AddressUpdateSessionDto } from '../models/AddressUpdateSessionDto';
import type { SuccessResult } from '../models/SuccessResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AddressService {
    /**
     * 当前登录用户添加地址
     * @returns SuccessResult
     * @throws ApiError
     */
    public static createSession({
        requestBody,
    }: {
        requestBody: AddressCreateSessionDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/address/create/session',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取当前登录用户地址列表
     * @returns AddressGetAllSessionResponse
     * @throws ApiError
     */
    public static getAllSession(): CancelablePromise<AddressGetAllSessionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/address/getAll/session',
        });
    }
    /**
     * 删除登录用户指定id地址
     * @returns SuccessResult
     * @throws ApiError
     */
    public static removeSession({
        id,
    }: {
        id: any,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/address/{id}/session',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 更新登录用户指定id地址
     * @returns SuccessResult
     * @throws ApiError
     */
    public static updateSession({
        id,
        requestBody,
    }: {
        id: any,
        requestBody: AddressUpdateSessionDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/address/{id}/session',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取指定id地址数据
     * @returns AddressGetResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: any,
    }): CancelablePromise<AddressGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/address/{id}',
            path: {
                'id': id,
            },
        });
    }
}
