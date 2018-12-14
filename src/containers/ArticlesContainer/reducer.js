import {
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILD,
    FILLTER_ARTICLES_AUTHOR_SUCCESS,
    FILLTER_ARTICLES_AUTHOR_FAILD,
    FILLTER_ARTICLES_FAVORITED_SUCCESS,
    FILLTER_ARTICLES_FAVORITED_FAILD,
    FILLTER_ARTICLES_TAGS_SUCCESS,
    FILLTER_ARTICLES_TAGS_FAILD
} from './constants';

const initialState = {
    articles: [],
    index: 0,
    articlesCount: 0,
    error: null,
};

const reducer = (state = initialState, action) => {
    const { payload = {}, index = 0 } = action;
    const {
        articles = [],
        articlesCount = 0
    } = payload;

    switch (action.type) {
        case FETCH_ARTICLES_SUCCESS:
            return { ...state, articles: articles, articlesCount: articlesCount, index: index };
        case FETCH_ARTICLES_FAILD:
            return { ...state, error: action.error };
        case FILLTER_ARTICLES_AUTHOR_SUCCESS:
            return { ...state, articles: articles, articlesCount: articlesCount, index: index };
        case FILLTER_ARTICLES_AUTHOR_FAILD:
            return { ...state, error: action.error };
        case FILLTER_ARTICLES_FAVORITED_SUCCESS:
            return { ...state, articles: articles, articlesCount: articlesCount, index: index };
        case FILLTER_ARTICLES_FAVORITED_FAILD:
            return { ...state, error: action.error };
        case FILLTER_ARTICLES_TAGS_SUCCESS:
            return { ...state, articles: articles, articlesCount: articlesCount, index: index };
        case FILLTER_ARTICLES_TAGS_FAILD:
            return { ...state, error: action.error, index: index };
        default:
            return { ...state };
    }
}

export default reducer;