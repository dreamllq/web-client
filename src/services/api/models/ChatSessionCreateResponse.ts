/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatSession } from './ChatSession';

export type ChatSessionCreateResponse = {
    code: number;
    message: string;
    data: ChatSession;
};
