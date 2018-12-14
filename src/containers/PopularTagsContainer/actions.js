import {
    FETCH_TAGS_REQUEST,
    FETCH_TAGS_SUCCESS,
    FETCH_TAGS_FAILD,
} from './constants';

export const fetchPopularTagsRequest = () => ({
    type: FETCH_TAGS_REQUEST
});

export const fetchPopularSuccess = payload => ({
    type: FETCH_TAGS_SUCCESS,
    payload
});

export const fetchPopularFaild = payload => ({
    type: FETCH_TAGS_FAILD,
    payload
});


