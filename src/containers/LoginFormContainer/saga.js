import { takeLatest, put, call } from 'redux-saga/effects';
import {
    AUTHENTICATION_API,
    ERR_REQUEST,
    KEY_STORE
} from './../../utils/constants';
import { authLogin } from './../../providers/auth';
import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT
} from './constants';

function* authorize(action) {
    const { email = '', password = '' } = action.infoLogin;
    const params = {
        endpoint: AUTHENTICATION_API.ENDPOINT,
        email: email,
        password: password
    }
    try {
        // check had token 
        const token = localStorage.getItem(KEY_STORE.TOKEN);
        if (token && token.length > 10) {
            yield put({ type: AUTH_SUCCESS, err: '' });
        } else {
            // call fuction authen
            const reponse = yield call(authLogin, { ...params });
            yield put({ type: AUTH_SUCCESS, err: '', user: reponse });
        }

    } catch (error) {
        let errMessage;
        const { message = '' } = error;
        switch (parseInt(message)) {
            case ERR_REQUEST["500"].status:
                errMessage = ERR_REQUEST["500"].err;
                break;
            case ERR_REQUEST["422"].status:
                errMessage = ERR_REQUEST["422"].err;
                break;
            case ERR_REQUEST["401"].status:
                errMessage = ERR_REQUEST["401"].err;
                break;
            default:
                errMessage = ERR_REQUEST.DEFAULT;
        }
        yield put({ type: AUTH_FAILURE, err: errMessage });
    }
}

// Logout clear token and user
function* userLogout() {
    localStorage.removeItem(KEY_STORE.TOKEN);
    const user = localStorage.removeItem(KEY_STORE.INFOR_USER);
    yield put({ type: USER_LOGOUT_SUCCESS, err: null, user: user });
}

export function* watchAuthen() {
    yield takeLatest(AUTH_REQUEST, authorize)
    yield takeLatest(USER_LOGOUT, userLogout)
}