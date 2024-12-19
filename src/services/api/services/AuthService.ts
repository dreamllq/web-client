/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthLoginSuccessResponse } from '../models/AuthLoginSuccessResponse';
import type { AuthVerifyResponse } from '../models/AuthVerifyResponse';
import type { LoginByCodeDto } from '../models/LoginByCodeDto';
import type { LoginBySmsCodeDto } from '../models/LoginBySmsCodeDto';
import type { LoginByWeixinDto } from '../models/LoginByWeixinDto';
import type { LoginDto } from '../models/LoginDto';
import type { SuccessResult } from '../models/SuccessResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * 验证auth
     * @returns AuthVerifyResponse
     * @throws ApiError
     */
    public static verify(): CancelablePromise<AuthVerifyResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/verify',
        });
    }
    /**
     * 注销登录用户
     * @returns SuccessResult
     * @throws ApiError
     */
    public static cancellation(): CancelablePromise<SuccessResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/auth/cancellation',
        });
    }
    /**
     * 用户名密码登录
     * @returns AuthLoginSuccessResponse
     * @throws ApiError
     */
    public static login({
        requestBody,
    }: {
        requestBody: LoginDto,
    }): CancelablePromise<AuthLoginSuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 手机验证码登录
     * @returns AuthLoginSuccessResponse
     * @throws ApiError
     */
    public static loginBySmsCode({
        requestBody,
    }: {
        requestBody: LoginBySmsCodeDto,
    }): CancelablePromise<AuthLoginSuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/loginBySmsCode',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 微信登录
     * @returns AuthLoginSuccessResponse
     * @throws ApiError
     */
    public static loginByWeixin({
        requestBody,
    }: {
        requestBody: LoginByWeixinDto,
    }): CancelablePromise<AuthLoginSuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/loginByWeixin',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 微信小程序手机号登录
     * @returns AuthLoginSuccessResponse
     * @throws ApiError
     */
    public static loginByWeixinMobile({
        requestBody,
    }: {
        requestBody: LoginByWeixinDto,
    }): CancelablePromise<AuthLoginSuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/loginByWeixinMobile',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 类似oauth2的code登录
     * @returns any
     * @throws ApiError
     */
    public static loginByCode({
        requestBody,
    }: {
        requestBody: LoginByCodeDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/loginByCode',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 生成登录code
     * @returns any
     * @throws ApiError
     */
    public static generateLoginCode(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/authenticate',
        });
    }
}
