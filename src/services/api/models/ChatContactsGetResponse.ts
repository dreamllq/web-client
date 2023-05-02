/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatContacts } from './ChatContacts';

export type ChatContactsGetResponse = {
    code: number;
    message: string;
    data: Array<ChatContacts>;
};
