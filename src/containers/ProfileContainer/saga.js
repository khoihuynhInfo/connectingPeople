import { takeLatest, put, all, call } from 'redux-saga/effects';
import fetchApi from './../../providers/api';
import { CURRENT_USER, KEY_STORE } from './../../utils/constants';

import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILD,
} from './constants';
// fetch current user for Setting page
function* getCurrentUser() {

    const options = {
        method: CURRENT_USER.METHOD,
        endpoint: CURRENT_USER.ENDPOINT,
        data: null,
        haveAuthorized: true
    };
    try {
        const response = yield call(fetchApi, { ...options });
        const { user = {} } = (typeof response === 'object' && response)
            ? response.data : {};
        localStorage.setItem(KEY_STORE.INFOR_USER, JSON.stringify(user));
        yield put({ type: FETCH_USER_SUCCESS, currentUser: user });

    } catch (error) {
        if (typeof error === 'object' && error) {
            const { data } = error;
            const { errors } = data;
            yield put({ type: FETCH_USER_SUCCESS, errors });
        } else {
            const errors = {};
            yield put({ type: FETCH_USER_FAILD, errors });
        }
    }
}

export function* watchFetchCurrentUserSaga() {
    yield all([
        yield takeLatest(FETCH_USER_REQUEST, getCurrentUser)
    ]);
}



