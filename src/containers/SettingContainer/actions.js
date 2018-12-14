import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILD,
} from './constants';

export const updateUserRequest = dataUser => ({
    type: UPDATE_USER_REQUEST,
    dataUser
});

export const updateUserSuccess = payload => ({
    type: UPDATE_USER_SUCCESS,
    payload
});

export const  updateUserFaild = payload => ({
    type: UPDATE_USER_FAILD,
    payload
});








