import { takeLatest, put, call, all } from 'redux-saga/effects';
import fetchApi from './../../providers/api';
import {
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILD,
    DELETE_COMMNET_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILD
} from './constants';
import {
    ARTICLE_DETAIL,
    ADD_COMMENT,
    DELETE_COMMENT
} from './../../utils/constants';

import { FETCH_ARTICLES_DETAIL_REQUEST } from './../ArticleDetailContainer/constants';

// Fetch articels
function* addAnComment(action) {

    const { slug = '', commnet = '' } = action.payload;
    const options = {
        method: ADD_COMMENT.METHOD,
        endpoint: `${ARTICLE_DETAIL.ENDPOINT
            }/${slug}/${ADD_COMMENT.ENDPOINT
            }`,
        data: { comment: { body: commnet } },
        haveAuthorized: true
    }
    try {
        const response = yield call(fetchApi, { ...options });
        yield put({ type: ADD_COMMENT_SUCCESS, payload: response });
        // if post comment succsess then fetch new list comment
        if (response.status === 200) {
            yield put({ type: FETCH_ARTICLES_DETAIL_REQUEST, payload: action.payload });
        }

    } catch (error) {
        yield put({ type: ADD_COMMENT_FAILD, error });
    }
}


function* deleteAnComment(action) {

    const { idComment = undefined, slug = '' } = action.payload;
    const options = {
        method: DELETE_COMMENT.METHOD,
        endpoint: `${ARTICLE_DETAIL.ENDPOINT
            }/${slug}/${DELETE_COMMENT.ENDPOINT
            }/${idComment ? parseInt(idComment) : undefined}`,
        data: null,
        haveAuthorized: true
    }
    try {
        const response = yield call(fetchApi, { ...options });
        yield put({ type: DELETE_COMMENT_SUCCESS, payload: response });
        // if delete comment succsess then fetch new list comment
        if (response.status === 200) {
            yield put({ type: FETCH_ARTICLES_DETAIL_REQUEST, payload: action.payload });
        }

    } catch (error) {
        yield put({ type: DELETE_COMMENT_FAILD, error });
    }
}


export function* watchAnComment() {
    yield all([
        yield takeLatest(ADD_COMMENT_REQUEST, addAnComment),
        yield takeLatest(DELETE_COMMNET_REQUEST, deleteAnComment)
    ]);
}


