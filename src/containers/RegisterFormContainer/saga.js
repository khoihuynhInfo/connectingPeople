import { takeLatest, put, call } from 'redux-saga/effects';
import fetchApi from './../../providers/api';
import {
    REGISTRATION_ACCOUNT,
} from './../../utils/constants';
import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE
} from './constants';
import { KEY_STORE } from './../../utils/constants';

function* registration(action) {
    // console.log('action', action);
    const { email = '', username = '', password = '', history = {} } = action.infoRegistation;

    const options = {
        method: REGISTRATION_ACCOUNT.METHOD,
        endpoint: REGISTRATION_ACCOUNT.ENDPOINT,
        data: { user: { username: username, email: email, password: password } },
        headers: { "Content-Type": "application/json" },
    }
    try {
        const response = yield call(fetchApi, { ...options });
        const { user = {} } = (typeof response === 'object' && response)
            ? response.data : {};
        // save in store
        localStorage.setItem(
            KEY_STORE.TOKEN, JSON.stringify(user.token)
        );
        localStorage.setItem(
            KEY_STORE.INFOR_USER, JSON.stringify(user)
        );
        yield put({ type: REGISTRATION_SUCCESS, err: '', user: user });
        history.push('/');
    } catch (error) {
        const { data } = error;
        const { errors } = data;
        yield put({ type: REGISTRATION_FAILURE, err: errors ? errors : null });
    }
}


export function* watchRegistration() {
    yield takeLatest(REGISTRATION_REQUEST, registration)
}