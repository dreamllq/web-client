/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ForumCommentCreateDto = {
    content: string;
    postId: string;
    images: Array<string>;
    toCommentId?: string;
};
