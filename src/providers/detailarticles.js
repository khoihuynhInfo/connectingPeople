import fetchApi from './api';
import {
    ARTICLE_DETAIL,
    COMMENT_ARTICLE,
    DELETE_ARTICLE,
    FAVORITE_ARTICLE,
    UNFAVORITE_ARTICLE
} from './../utils/constants';

// Fetch Article

export const providerFetchArticle = (slug) => {
    const optionArticle = {
        method: ARTICLE_DETAIL.METHOD,
        endpoint: `${ARTICLE_DETAIL.ENDPOINT}/${slug}`,
        data: null,
        haveAuthorized: true
    };
    return fetchApi(optionArticle);

}

// Fetch comnet Article

export const providerFetchCommentArticle = (slug) => {
    const optionComment = {
        method: ARTICLE_DETAIL.METHOD,
        endpoint: `${ARTICLE_DETAIL.ENDPOINT
            }/${slug}/${COMMENT_ARTICLE.ENDPOINT
            }`,
        data: null,
    };
    return fetchApi(optionComment);
}

//  Delete Article

export const providerDeleteArticle = (slug) => {
    const options = {
        method: DELETE_ARTICLE.METHOD,
        endpoint: `${DELETE_ARTICLE.ENDPOINT
            }/${slug}`,
        data: null,
        haveAuthorized: true
    }
    return fetchApi(options);
}

// Favorite Article

export const providerFavoriteArticle = (slug) => {
    const optionArticle = {
        method: FAVORITE_ARTICLE.METHOD,
        endpoint: `${ARTICLE_DETAIL.ENDPOINT}/${slug}/${
            FAVORITE_ARTICLE.ENDPOINT}`,
        data: null,
        haveAuthorized: true
    };

    return fetchApi(optionArticle);
}

// unFavorite Article

export const providerUnFavoriteArticle = (slug) => {
    const optionArticle = {
        method: UNFAVORITE_ARTICLE.METHOD,
        endpoint: `${ARTICLE_DETAIL.ENDPOINT}/${slug}/${
            FAVORITE_ARTICLE.ENDPOINT}`,
        data: null,
        haveAuthorized: true
    };
    return fetchApi(optionArticle);
}
