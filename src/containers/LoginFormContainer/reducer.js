import {
    AUTH_SUCCESS,
    AUTH_FAILURE,
    USER_LOGOUT_SUCCESS
} from './constants';
import {
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILD
} from './../SettingContainer/constants';
import {
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE
} from './../RegisterFormContainer/constants';

import { KEY_STORE } from './../../utils/constants';

// use token check authen cause prevent refesh page
const token = localStorage.getItem(KEY_STORE.TOKEN);
const user = JSON.parse(localStorage.getItem(KEY_STORE.INFOR_USER));

const initialState = {
    isLogined: (token && token.length > 10) ? true : false,
    errors: {},
    user: user ? user : {}
};

const reducer = (state = initialState, action) => {
    const { err = '' } = action;
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...state, errors: err, isLogined: true, user: action.user ? action.user : state.user };
        case USER_LOGOUT_SUCCESS:
            return { ...state, errors: err, isLogined: false, user: undefined };
        case AUTH_FAILURE:
            return { ...state, errors: err, isLogined: false };
        case UPDATE_USER_SUCCESS:
            return { ...state, errors: err, isLogined: true, user: action.user ? action.user : state.user };
        case UPDATE_USER_FAILD:
            return { ...state, errors: err, isLogined: true, user: action.user ? action.user : state.user };
        case REGISTRATION_SUCCESS:
            return { ...state, errors: err, isLogined: true, user: action.user ? action.user : state.user };
        case REGISTRATION_FAILURE:
            return { ...state, errors: err, isLogined: false, user: undefined };
        default:
            return state;
    }
}

export default reducer;

