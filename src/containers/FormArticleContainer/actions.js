import {
    CREATE_ARTICLE_REQUEST,
    CREATE_ARTICLE_SUCCESS,
    CREATE_ARTICLE_FAILD,
    UPDATE_ARTICLE_REQUEST,
    UPDATE_ARTICLE_SUCCESS,
    UPDATE_ARTICLE_FAILD
} from './constants';

export const createArticleRequest = payload => ({
    type: CREATE_ARTICLE_REQUEST,
    payload
});
export const createArticleSuccess = payload => ({
    type: CREATE_ARTICLE_SUCCESS,
    payload
});
export const createArticleFaild = payload => ({
    type: CREATE_ARTICLE_FAILD,
    payload
});


export const updateArticleRequest = payload => ({
    type: UPDATE_ARTICLE_REQUEST,
    payload
});
export const updateArticleSuccess = payload => ({
    type: UPDATE_ARTICLE_SUCCESS,
    payload
});
export const updateArticleFaild = payload => ({
    type: UPDATE_ARTICLE_FAILD,
    payload
});


