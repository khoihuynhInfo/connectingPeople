import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
    ProviderFetchGlobalArticles,
    ProviderFetchYourFeedArticles,
    ProviderFillterMyArticles,
    ProviderFillterFavoritedArticles,
    ProviderFillterTagsArticles
} from './../../providers/articles';
import {
    FETCH_ARTICLES_REQUEST,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILD,
    FETCH_FEED_ARTICLES_REQUEST,

    FILLTER_ARTICLES_AUTHOR_REQUEST,
    FILLTER_ARTICLES_AUTHOR_SUCCESS,
    FILLTER_ARTICLES_AUTHOR_FAILD,

    FILLTER_ARTICLES_FAVORITED_REQUEST,
    FILLTER_ARTICLES_FAVORITED_SUCCESS,
    FILLTER_ARTICLES_FAVORITED_FAILD,

    FILLTER_ARTICLES_TAGS_REQUEST,
    FILLTER_ARTICLES_TAGS_SUCCESS,
    FILLTER_ARTICLES_TAGS_FAILD

} from './constants';

// Fetch articels
function* fetchGlobalArticles(action) {
    // when transfom page call action and payload limit
    const { index = 0 } = action;
    try {
        const response = yield call(ProviderFetchGlobalArticles, index);
        yield put({ type: FETCH_ARTICLES_SUCCESS, payload: response.data, index: index });
    } catch (error) {
        yield put({ type: FETCH_ARTICLES_FAILD, error });
    }
}

// Fetch your feed articels
function* fetchYourFeedArticles(action) {
    // console.log('action', action);
    const { index = 0 } = action;
    try {
        const response = yield call(ProviderFetchYourFeedArticles, index);
        yield put({ type: FETCH_ARTICLES_SUCCESS, payload: response.data, index: index });
    } catch (error) {
        yield put({ type: FETCH_ARTICLES_FAILD, error });
    }
}

function* fillterArticleAuthor(action) {
    const { index = 0, username } = action.payload;
    try {
        const response = yield call(ProviderFillterMyArticles, index, username);
        yield put({ type: FILLTER_ARTICLES_AUTHOR_SUCCESS, payload: response.data, index: index });
    } catch (error) {
        yield put({ type: FILLTER_ARTICLES_AUTHOR_FAILD, error });
    }
}

function* fillterArticleFavoried(action) {
    const { index = 0, username } = action.payload;
    try {
        const response = yield call(ProviderFillterFavoritedArticles, index, username);
        yield put({ type: FILLTER_ARTICLES_FAVORITED_SUCCESS, payload: response.data, index: index });
    } catch (error) {
        yield put({ type: FILLTER_ARTICLES_FAVORITED_FAILD, error });
    }
}

function* fillterArticleTags(action) {
    const { index = 0, tag } = action.payload;
    try {
        const response = yield call(ProviderFillterTagsArticles, index, tag);
        yield put({ type: FILLTER_ARTICLES_TAGS_SUCCESS, payload: response.data, index: index });
    } catch (error) {
        yield put({ type: FILLTER_ARTICLES_TAGS_FAILD, error });
    }
}

export function* watchArticles() {
    yield all([
        yield takeLatest(FETCH_ARTICLES_REQUEST, fetchGlobalArticles),
        yield takeLatest(FETCH_FEED_ARTICLES_REQUEST, fetchYourFeedArticles),
        yield takeLatest(FILLTER_ARTICLES_AUTHOR_REQUEST, fillterArticleAuthor),
        yield takeLatest(FILLTER_ARTICLES_FAVORITED_REQUEST, fillterArticleFavoried),
        yield takeLatest(FILLTER_ARTICLES_TAGS_REQUEST, fillterArticleTags),
    ]);
}


