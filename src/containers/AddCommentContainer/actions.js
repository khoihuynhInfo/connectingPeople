import {
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILD,
    DELETE_COMMNET_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILD
} from './constants';

export const addCommentRequest = payload => ({
    type: ADD_COMMENT_REQUEST,
    payload
});
export const addCommentSuccess = payload => ({
    type: ADD_COMMENT_SUCCESS,
    payload
});
export const addCommentFaild = payload => ({
    type: ADD_COMMENT_FAILD,
    payload
});


export const deleteCommentRequest = payload => ({
    type: DELETE_COMMNET_REQUEST,
    payload
});
export const deleteCommentSuccess = payload => ({
    type: DELETE_COMMENT_SUCCESS,
    payload
});
export const deleteCommentFaild = payload => ({
    type: DELETE_COMMENT_FAILD,
    payload
});

