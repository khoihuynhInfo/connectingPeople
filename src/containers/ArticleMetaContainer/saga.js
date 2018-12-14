import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILD,
    FOLLOW_USER_REQUEST,
    FOLLOW_USER_SUCCESS,
    FOLLOW_USER_FAILD,
    UNFOLLOW_USER_REQUEST,
    UNFOLLOW_USER_SUCCESS,
    UNFOLLOW_USER_FAILD
} from './constants';
import {
    providerFollowUser,
    providerFetchProfile,
    providerUnFollowUser,
} from './../../providers/profile';

// follow user 
function* followUser(action) {
    try {
        const response = yield call(providerFollowUser,  action.payload);
        yield put({ type: FOLLOW_USER_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: FOLLOW_USER_FAILD, error });
    }
}

// unfollow article author
function* unFollowUser(action) {
    try {
        const response = yield call(providerUnFollowUser, action.payload);
        yield put({ type: UNFOLLOW_USER_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: UNFOLLOW_USER_FAILD, error });
    }
}

// Fetch profile user author article
function* fetchProfile(action) {
    try {
        const response = yield call(providerFetchProfile, action.username);
        yield put({ type: FETCH_PROFILE_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: FETCH_PROFILE_FAILD, error });
    }
}

export function* watchAuthorUser() {
    yield all([
        yield takeLatest(FOLLOW_USER_REQUEST, followUser),
        yield takeLatest(FETCH_PROFILE_REQUEST, fetchProfile),
        yield takeLatest(UNFOLLOW_USER_REQUEST, unFollowUser)
    ]);
}


