/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChatContactsUpdateDto = {
    status: ChatContactsUpdateDto.status;
};
export namespace ChatContactsUpdateDto {
    export enum status {
        UNKNOWN = 'unknown',
        WAITING_VERIFICATION = 'waiting_verification',
        CAN_PASS = 'can_pass',
        PASSED = 'passed',
        REFUSE = 'refuse',
        REFUSED = 'refused',
    }
}

