/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChatMessageCreateDto = {
    id: string;
    type: ChatMessageCreateDto.type;
    content: string;
    contactsId: string;
};

export namespace ChatMessageCreateDto {

    export enum type {
        UNKNOWN = 'unknown',
        TEXT = 'text',
    }


}
