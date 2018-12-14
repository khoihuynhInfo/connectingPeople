import {
    FETCH_ARTICLES_REQUEST,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILD,
    FETCH_FEED_ARTICLES_REQUEST,

    FILLTER_ARTICLES_FAVORITED_REQUEST,
    FILLTER_ARTICLES_FAVORITED_SUCCESS,
    FILLTER_ARTICLES_FAVORITED_FAILD,

    FILLTER_ARTICLES_AUTHOR_REQUEST,
    FILLTER_ARTICLES_AUTHOR_SUCCESS,
    FILLTER_ARTICLES_AUTHOR_FAILD,

    FILLTER_ARTICLES_TAGS_REQUEST,
    FILLTER_ARTICLES_TAGS_SUCCESS,
    FILLTER_ARTICLES_TAGS_FAILD
} from './constants';

export const fetchArticlesRequest = index => ({
    type: FETCH_ARTICLES_REQUEST,
    index
});

export const fetchArticlesSuccess = payload => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload
});

export const fetchArticlesFaild = payload => ({
    type: FETCH_ARTICLES_FAILD,
    payload
});

export const fetchArticlesYourFeedRequest = index => ({
    type: FETCH_FEED_ARTICLES_REQUEST,
    index
});

// actions fillter Articles Author
export const fillterArticlesRequest = payload => ({
    type: FILLTER_ARTICLES_AUTHOR_REQUEST,
    payload
});

export const fillterArticlesSuccess = index => ({
    type: FILLTER_ARTICLES_AUTHOR_SUCCESS,
    index
});

export const fillterArticlesFaild = index => ({
    type: FILLTER_ARTICLES_AUTHOR_FAILD,
    index
});

// actions fillter Articles Favorited
export const fillterFavoritedRequest = payload => ({
    type: FILLTER_ARTICLES_FAVORITED_REQUEST,
    payload
});

export const fillterFavoritedSuccess = payload => ({
    type: FILLTER_ARTICLES_FAVORITED_SUCCESS,
    payload
});

export const fillterFavoritedFaild = payload => ({
    type: FILLTER_ARTICLES_FAVORITED_FAILD,
    payload
});


// actions fillter Tags Articles 
export const fillterTagsRequest = payload => ({
    type: FILLTER_ARTICLES_TAGS_REQUEST,
    payload
});

export const fillterTagsSuccess = payload => ({
    type: FILLTER_ARTICLES_TAGS_SUCCESS,
    payload
});

export const fillterTagsFaild = payload => ({
    type: FILLTER_ARTICLES_TAGS_FAILD,
    payload
});


