/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatContacts } from './ChatContacts';
import type { User } from './User';
export type ChatMessage = {
    id: string;
    contacts: ChatContacts;
    type: ChatMessage.type;
    content: string;
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
export namespace ChatMessage {
    export enum type {
        UNKNOWN = 'unknown',
        TEXT = 'text',
    }
}

