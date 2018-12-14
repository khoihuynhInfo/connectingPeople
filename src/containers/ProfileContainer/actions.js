import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILD,
} from './constants';

export const  fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST,
});


export const fetchUserSuccess = payload => ({
    type: FETCH_USER_SUCCESS,
    payload
});

export const  fetchUserFaild = payload => ({
    type: FETCH_USER_FAILD,
    payload
});








