import { takeLatest, put, all, call } from 'redux-saga/effects';
import fetchApi from './../../providers/api';
import { UPDATE_USER } from './../../utils/constants';
import { KEY_STORE } from './../../utils/constants';
import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILD,
} from './constants';

function* updateUser(action) {
    const { dataUser = {} } = action;
    const options = {
        method: UPDATE_USER.METHOD,
        endpoint: UPDATE_USER.ENDPOINT,
        data: dataUser,
        haveAuthorized: true
    };

    try {
        const response = yield call(fetchApi, { ...options });
        const { user = {} } = (typeof response === 'object' && response)
            ? response.data : {};
        localStorage.setItem(KEY_STORE.INFOR_USER, JSON.stringify(user));
        yield put({ type: UPDATE_USER_SUCCESS, err: '', user: user });
        dataUser.history.push('/');

    } catch (error) {
        const { data } = error;
        const { errors } = data;
        yield put({ type: UPDATE_USER_FAILD, err: errors ? errors : null });
    }
}

export function* watchUpdateUserSaga() {
    yield all([
        yield takeLatest(UPDATE_USER_REQUEST, updateUser)
    ]);
}

