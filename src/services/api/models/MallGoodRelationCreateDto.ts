/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MallGoodRelationCreateDto = {
    goodId: string;
    type: MallGoodRelationCreateDto.type;
};

export namespace MallGoodRelationCreateDto {

    export enum type {
        UNKNOWN = 'unknown',
        COLLECT = 'collect',
    }


}
