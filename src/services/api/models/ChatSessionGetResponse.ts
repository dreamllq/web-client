/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatSession } from './ChatSession';

export type ChatSessionGetResponse = {
    code: number;
    message: string;
    data: Array<ChatSession>;
};
