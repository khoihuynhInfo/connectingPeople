import {
    FETCH_ARTICLES_DETAIL_SUCCESS,
    FETCH_ARTICLES_DETAIL_FAILD,
    DELETE_ARTICLE_REQUEST,
    DELETE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_FAILD,
} from './constants';

const initialState = {
    article: [],
    error: '',
    comments: []
};

const initialDeleteArticleState = {
    status: '',
    error: ''
}

const reducerDetailArticle = (state = initialState, action) => {

    const { payload = {} } = action;
    const { article = {}, comments = [], error } = payload;

    switch (action.type) {
        case FETCH_ARTICLES_DETAIL_SUCCESS:
            return { ...state, article: article, comments: comments, error: null };
        case FETCH_ARTICLES_DETAIL_FAILD:
            return { ...state, error: error };
        default:
            return { ...state };
    }
}

const reducerDeleteArticle = (state = initialDeleteArticleState, action) => {
    switch (action.type) {
        case DELETE_ARTICLE_REQUEST:
            return { ...state, status: action.payload.status, error: null };
        case DELETE_ARTICLE_SUCCESS:
            return { ...state, status: action.payload.status, error: null };
        case DELETE_ARTICLE_FAILD:
            return { ...state, status: '', error: null };
        default:
            return { ...state };
    }
}

export {
    reducerDetailArticle,
    reducerDeleteArticle
};