/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatMessage } from './ChatMessage';

export type ChatMessageGetResponse = {
    code: number;
    message: string;
    data: Array<ChatMessage>;
};
