/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUsersDto } from '../models/CreateUsersDto';
import type { DeleteSuccessResult } from '../models/DeleteSuccessResult';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';
import type { SuccessResult } from '../models/SuccessResult';
import type { UpdateSuccessResult } from '../models/UpdateSuccessResult';
import type { UserGetAllSuccessResponse } from '../models/UserGetAllSuccessResponse';
import type { UserGetSuccessResponse } from '../models/UserGetSuccessResponse';
import type { UsersBindMobileDto } from '../models/UsersBindMobileDto';
import type { UsersBindUsernameDto } from '../models/UsersBindUsernameDto';
import type { UsersBindWeixinDto } from '../models/UsersBindWeixinDto';
import type { UsersPaginateSuccessResponse } from '../models/UsersPaginateSuccessResponse';
import type { UserUpdateDto } from '../models/UserUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * 获取所有用户数据
     * @returns UserGetAllSuccessResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<UserGetAllSuccessResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users',
        });
    }

    /**
     * 创建用户
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateUsersDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取分页用户数据
     * @returns UsersPaginateSuccessResponse
     * @throws ApiError
     */
    public static paginate({
        pageNo,
        pageSize,
        username,
        isActive,
    }: {
        pageNo: number,
        pageSize: number,
        /**
         * 用户名
         */
        username?: string,
        /**
         * 是否活跃
         */
        isActive?: string,
    }): CancelablePromise<UsersPaginateSuccessResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/page',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'username': username,
                'isActive': isActive,
            },
        });
    }

    /**
     * 删除用户
     * @returns DeleteSuccessResult
     * @throws ApiError
     */
    public static remove({
        id,
    }: {
        id: any,
    }): CancelablePromise<DeleteSuccessResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 获取指定id的用户数据
     * @returns UserGetSuccessResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: any,
    }): CancelablePromise<UserGetSuccessResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 修改指定id的用户数据
     * @returns UpdateSuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        id: any,
        requestBody: UserUpdateDto,
    }): CancelablePromise<UpdateSuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 当前登录用户注销账号
     * @returns SuccessResult
     * @throws ApiError
     */
    public static removeSession(): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/users/session',
        });
    }

    /**
     * 绑定微信用户
     * @returns SuccessResult
     * @throws ApiError
     */
    public static bindWeixinSession({
        requestBody,
    }: {
        requestBody: UsersBindWeixinDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/bindWeixinSession',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 绑定手机号
     * @returns SuccessResult
     * @throws ApiError
     */
    public static bindMobileSession({
        requestBody,
    }: {
        requestBody: UsersBindMobileDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/bindMobileSession',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 绑定小程序手机号
     * @returns SuccessResult
     * @throws ApiError
     */
    public static bindMpMobileSession({
        requestBody,
    }: {
        requestBody: UsersBindWeixinDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/bindMpMobileSession',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 绑定用户名
     * @returns SuccessResult
     * @throws ApiError
     */
    public static bindUsernameSession({
        requestBody,
    }: {
        requestBody: UsersBindUsernameDto,
    }): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/bindUsernameSession',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
