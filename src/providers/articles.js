import fetchApi from './api';
import {
    ARTICLES_API,
    FEED_ARTICLES_API,
    FILLTER_ARTICLES_AUTHOR,
    FILLTER_ARTICLES_FAVORITED
} from './../utils/constants';

// Fetch Glocal Articles 
export const ProviderFetchGlobalArticles = (index) => {
    const options = {
        method: ARTICLES_API.METHOD,
        endpoint: ARTICLES_API.ENDPOINT,
        data: null,
        params: {
            limit: ARTICLES_API.LIMIT_ARTICLES,
            offset: (index > 0) ? ((index - 1) * 10) : index
        },
        haveAuthorized: true
    };
    return fetchApi(options);
}

// Fetch Your Feed Articles 
export const ProviderFetchYourFeedArticles = (index) => {
    const options = {
        method: FEED_ARTICLES_API.METHOD,
        endpoint: FEED_ARTICLES_API.ENDPOINT,
        data: null,
        params: {
            limit: FEED_ARTICLES_API.LIMIT_ARTICLES,
            offset: (index > 0) ? ((index - 1) * 10) : index
        },
        haveAuthorized: true
    };
    return fetchApi(options);
}

// Fillter My Articles  
export const ProviderFillterMyArticles = (index, username) => {
    const options = {
        method: FILLTER_ARTICLES_AUTHOR.METHOD,
        endpoint: FILLTER_ARTICLES_AUTHOR.ENDPOINT,
        data: null,
        params: {
            limit: FEED_ARTICLES_API.LIMIT_ARTICLES,
            offset: (index > 0) ? ((index - 1) * 10) : index,
            author: username
        },
        haveAuthorized: true
    };
    return fetchApi(options);
}


// Fillter Favorited Articles
export const ProviderFillterFavoritedArticles = (index, username) => {
    const options = {
        method: FILLTER_ARTICLES_FAVORITED.METHOD,
        endpoint: FILLTER_ARTICLES_FAVORITED.ENDPOINT,
        data: null,
        params: {
            limit: FEED_ARTICLES_API.LIMIT_ARTICLES,
            offset: (index > 0) ? ((index - 1) * 10) : index,
            favorited: username
        },
        haveAuthorized: true
    };
    return fetchApi(options);
}

// Fillter Tags Articles
export const ProviderFillterTagsArticles = (index, tag) => {
    const options = {
        method: FILLTER_ARTICLES_FAVORITED.METHOD,
        endpoint: FILLTER_ARTICLES_FAVORITED.ENDPOINT,
        data: null,
        params: {
            limit: FEED_ARTICLES_API.LIMIT_ARTICLES,
            offset: (index > 0) ? ((index - 1) * 10) : index,
            tag: tag
        },
        // haveAuthorized: true
    };
    return fetchApi(options);
}




