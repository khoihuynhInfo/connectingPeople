import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    USER_LOGOUT,
    USER_LOGOUT_SUCCESS,
} from './constants';


export const authenRequest = (infoLogin = {}) => ({
    type: AUTH_REQUEST,
    infoLogin
});
export const authenSuccess = payload => ({
    type: AUTH_SUCCESS,
    payload
});
export const authenFaild = payload => ({
    type: AUTH_FAILURE,
    payload
});


export const userLogout = () => ({
    type: USER_LOGOUT,
});
export const userLogoutSucess = () => ({
    type: USER_LOGOUT_SUCCESS,
});



