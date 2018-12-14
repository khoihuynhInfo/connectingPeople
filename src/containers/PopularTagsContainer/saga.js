import { takeLatest, put, all, call } from 'redux-saga/effects';
import fetchApi from './../../providers/api';
import { TAGS_API } from './../../utils/constants';

import {
    FETCH_TAGS_REQUEST,
    FETCH_TAGS_SUCCESS,
    FETCH_TAGS_FAILD,
} from './constants';

function* fetchPopularTags() {
    const options = {
        method: TAGS_API.METHOD,
        endpoint: TAGS_API.ENDPOINT,
        data: null
    };
    try {
        const response = yield call(fetchApi, { ...options });
        const { tags = [] } = response.data;
        yield put({ type: FETCH_TAGS_SUCCESS, tags });
    } catch (error) {
        yield put({ type: FETCH_TAGS_FAILD, error });
    }
}

export function* watchPopularTagsSaga() {
    yield all([
        yield takeLatest(FETCH_TAGS_REQUEST, fetchPopularTags)
    ]);
}



