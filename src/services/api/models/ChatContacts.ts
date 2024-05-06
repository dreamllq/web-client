/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type ChatContacts = {
    id: string;
    contacts: User;
    creator: User;
    status: ChatContacts.status;
    /**
     * 创建时间
     */
    createDate: string;
    /**
     * 更新时间
     */
    updateDate: string;
};

export namespace ChatContacts {

    export enum status {
        UNKNOWN = 'unknown',
        WAITING_VERIFICATION = 'waiting_verification',
        CAN_PASS = 'can_pass',
        PASSED = 'passed',
        REFUSE = 'refuse',
        REFUSED = 'refused',
    }


}

