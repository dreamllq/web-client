/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiBaiduAccount } from './AiBaiduAccount';
import type { AiBaiduOrcGeneralScenarios } from './AiBaiduOrcGeneralScenarios';
import type { User } from './User';
export type AiBaiduOcr = {
    id: string;
    /**
     * ocr任务名称
     */
    name: string;
    account: AiBaiduAccount;
    /**
     * 操作类型
     */
    type: string;
    generalScenarios: AiBaiduOrcGeneralScenarios;
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

