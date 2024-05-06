/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRolesDto } from '../models/CreateRolesDto';
import type { DeleteSuccessResult } from '../models/DeleteSuccessResult';
import type { InsertSuccessResult } from '../models/InsertSuccessResult';
import type { RoleGetAllSuccessResponse } from '../models/RoleGetAllSuccessResponse';
import type { RoleGetSuccessResponse } from '../models/RoleGetSuccessResponse';
import type { RolesPaginateSuccessResponse } from '../models/RolesPaginateSuccessResponse';
import type { UpdateRoleDto } from '../models/UpdateRoleDto';
import type { UpdateSuccessResult } from '../models/UpdateSuccessResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RolesService {

    /**
     * 获取所有角色数据
     * @returns RoleGetAllSuccessResponse
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<RoleGetAllSuccessResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/roles',
        });
    }

    /**
     * 创建角色
     * @returns InsertSuccessResult
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateRolesDto,
    }): CancelablePromise<InsertSuccessResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/roles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取分页角色数据
     * @returns RolesPaginateSuccessResponse
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
         * 角色名
         */
        name?: string,
    }): CancelablePromise<RolesPaginateSuccessResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/roles/page',
            query: {
                'pageNo': pageNo,
                'pageSize': pageSize,
                'name': name,
            },
        });
    }

    /**
     * 删除角色
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
            url: '/api/roles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 获取指定id角色信息
     * @returns RoleGetSuccessResponse
     * @throws ApiError
     */
    public static get({
        id,
    }: {
        id: any,
    }): CancelablePromise<RoleGetSuccessResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/roles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 更新指定id角色数据
     * @returns UpdateSuccessResult
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        id: any,
        requestBody: UpdateRoleDto,
    }): CancelablePromise<UpdateSuccessResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/roles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
