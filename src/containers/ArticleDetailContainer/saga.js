import { takeLatest, put, call, all } from 'redux-saga/effects';
import { FETCH_PROFILE_REQUEST } from './../ArticleMetaContainer/constants';
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
import {
    providerFetchArticle,
    providerFetchCommentArticle,
    providerDeleteArticle,
    providerFavoriteArticle,
    providerUnFavoriteArticle
} from './../../providers/detailarticles';
import {
    FETCH_ARTICLES_REQUEST,
    FETCH_FEED_ARTICLES_REQUEST
} from './../ArticlesContainer/constants';

// Fetch detail article
function* fetchArticleDetail(action) {
    const { slug } = action.payload;
    try {
        const { ResponseArticle, ResponseComment } = yield all({
            ResponseArticle: call(providerFetchArticle, slug),
            ResponseComment: call(providerFetchCommentArticle, slug)
        });
        const { article = {} } = ResponseArticle.data;
        const { comments = [] } = ResponseComment.data;
        yield put({
            type: FETCH_ARTICLES_DETAIL_SUCCESS,
            payload: { article: { ...article }, comments: [...comments] }
        });
        // fetch profile user with username article author
        if (ResponseArticle.status === 200) {
            const { author = {} } = article;
            yield put({ type: FETCH_PROFILE_REQUEST, username: author.username });
        }
    } catch (error) {
        yield put({ type: FETCH_ARTICLES_DETAIL_FAILD, error });
    }
}

// Delete Article 
function* deleteArticle(action) {
    const { slug = '' } = action.payload;
    try {
        const response = yield call(providerDeleteArticle, slug);
        yield put({ type: DELETE_ARTICLE_SUCCESS, payload: response });
        // if delete comment succsess then fetch new list comment
        if (response.status === 200) {
            yield put({ type: DELETE_ARTICLE_SUCCESS, payload: action.payload });
        }
    } catch (error) {
        yield put({ type: DELETE_ARTICLE_FAILD, error });
    }
}

// Favorite Article
function* favoriteArticle(action) {
    const { slug = '', index = 0, feedToggle = -1 } = action.payload;
    try {
        const { ResponseArticle, ResponseComment } = yield all({
            ResponseArticle: call(providerFavoriteArticle, slug),
            ResponseComment: call(providerFetchCommentArticle, slug)
        });
        const { article = {} } = ResponseArticle.data;
        const { comments = [] } = ResponseComment.data;
        yield put({
            type: FETCH_ARTICLES_DETAIL_SUCCESS,
            payload: { article: { ...article }, comments: [...comments] }
        });
        if (ResponseArticle.status === 200) {
            if (feedToggle === -1) { // global articles
                yield put({ type: FETCH_ARTICLES_REQUEST, index: index });
            } else {
                yield put({ type: FETCH_FEED_ARTICLES_REQUEST, index: index });
            }

        }
    } catch (error) {
        yield put({ type: FETCH_ARTICLES_DETAIL_FAILD, error });
    }
}

// Unfavorite Article
function* unFavoriteArticle(action) {
    const { slug = '', index = 0, feedToggle = 1 } = action.payload;
    try {
        const { ResponseArticle, ResponseComment } = yield all({
            ResponseArticle: call(providerUnFavoriteArticle, slug),
            ResponseComment: call(providerFetchCommentArticle, slug)
        });
        const { article = {} } = ResponseArticle.data;
        const { comments = [] } = ResponseComment.data;
        yield put({
            type: FETCH_ARTICLES_DETAIL_SUCCESS,
            payload: { article: { ...article }, comments: [...comments] }
        });
        if (ResponseArticle.status === 200) {
            if (feedToggle === -1) { // global articles
                yield put({ type: FETCH_ARTICLES_REQUEST, index: index });
            } else {
                yield put({ type: FETCH_FEED_ARTICLES_REQUEST, index: index });
            }

        }
    } catch (error) {
        yield put({ type: FETCH_ARTICLES_DETAIL_FAILD, error });
    }
}

export function* watchArticleDetail() {
    yield all([
        yield takeLatest(FETCH_ARTICLES_DETAIL_REQUEST, fetchArticleDetail),
        yield takeLatest(DELETE_ARTICLE_REQUEST, deleteArticle),
        yield takeLatest(FAVORITE_ARTICLE_REQUEST, favoriteArticle),
        yield takeLatest(UNFAVORITE_ARTICLE_REQUEST, unFavoriteArticle)
    ]);

}


