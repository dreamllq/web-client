/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaiduOcrOperates } from './BaiduOcrOperates';
import type { GeneralScenarios } from './GeneralScenarios';

export type CreateAiBaiduOcrDto = {
    /**
     * 名称
     */
    name: string;
    /**
     * 账号信息
     */
    accountId: string;
    /**
     * 操作方法
     */
    type: BaiduOcrOperates;
    generalScenarios: GeneralScenarios;
};

