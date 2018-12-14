import { takeLatest, put, call, all } from 'redux-saga/effects';
import fetchApi from './../../providers/api';
import {
    CREATE_ARTICLE_REQUEST,
    CREATE_ARTICLE_SUCCESS,
    CREATE_ARTICLE_FAILD,
    UPDATE_ARTICLE_REQUEST,
    UPDATE_ARTICLE_SUCCESS,
    UPDATE_ARTICLE_FAILD
} from './constants';
import {
    CREATE_ARTICLE,
    UPDATE_ARTICLE,
} from './../../utils/constants';

// Fetch articels
function* createArticle(action) {
    const {
        title = '',
        description = '',
        body = '',
        tags = [],
        history
    } = action.payload;

    const options = {
        method: CREATE_ARTICLE.METHOD,
        endpoint: CREATE_ARTICLE.ENDPOINT,
        data: {
            article: {
                title: title,
                description: description,
                body: body,
                tagList: [...tags]
            }
        },
        haveAuthorized: true
    }
    try {
        const response = yield call(fetchApi, { ...options });
        yield put({ type: CREATE_ARTICLE_SUCCESS, payload: response });
        history.push('/');
    } catch (error) {
        yield put({ type: CREATE_ARTICLE_FAILD, error });
    }
}

// Update articels
function* updateArticle(action) {
    const {
        title = '',
        description = '',
        body = '',
        tags = [],
        history,
        slug = ''
    } = action.payload;

    const options = {
        method: UPDATE_ARTICLE.METHOD,
        endpoint: `${UPDATE_ARTICLE.ENDPOINT}/${slug}`,
        data: {
            article: {
                title: title,
                description: description,
                body: body,
                tagList: [...tags]
            }
        },
        haveAuthorized: true
    }
    try {
        const response = yield call(fetchApi, { ...options });
        yield put({ type: UPDATE_ARTICLE_SUCCESS, payload: response });
        history.push(`/article/${slug}`);
    } catch (error) {
        yield put({ type: UPDATE_ARTICLE_FAILD, error });
    }
}

export function* watchFormArticle() {
    yield all([
        yield takeLatest(CREATE_ARTICLE_REQUEST, createArticle),
        yield takeLatest(UPDATE_ARTICLE_REQUEST, updateArticle),
    ]);
}


