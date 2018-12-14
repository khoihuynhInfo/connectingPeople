import {
    FETCH_ARTICLES_DETAIL_REQUEST,
    FETCH_ARTICLES_DETAIL_SUCCESS,
    FETCH_ARTICLES_DETAIL_FAILD,
    DELETE_ARTICLE_REQUEST,
    DELETE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_FAILD,
    FAVORITE_ARTICLE_REQUEST,
    UNFAVORITE_ARTICLE_REQUEST
} from './constants';

// action fetch Article  

export const fetchArticleDetailRequest = payload => ({
    type: FETCH_ARTICLES_DETAIL_REQUEST,
    payload
});
export const fetchArticleDetailSuccess = payload => ({
    type: FETCH_ARTICLES_DETAIL_SUCCESS,
    payload
});
export const fetchArticleDetailFaild = payload => ({
    type: FETCH_ARTICLES_DETAIL_FAILD,
    payload
});

// action Delete Article

export const deleteArticleRequest = payload => ({
    type: DELETE_ARTICLE_REQUEST,
    payload
});
export const deleteArticleSuccess = payload => ({
    type: DELETE_ARTICLE_SUCCESS,
    payload
});
export const deleteArticleFaild = payload => ({
    type: DELETE_ARTICLE_FAILD,
    payload
});

// action Favorite Article

export const favoriteArticleRequest = payload => ({
    type: FAVORITE_ARTICLE_REQUEST,
    payload
});

export const unFavoriteArticleRequest = payload => ({
    type: UNFAVORITE_ARTICLE_REQUEST,
    payload
});


