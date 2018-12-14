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


export const followUserRequest = payload => ({
    type: FOLLOW_USER_REQUEST,
    payload
});
export const followUserSuccess = payload => ({
    type: FOLLOW_USER_SUCCESS,
    payload
});
export const followUserFaild = payload => ({
    type: FOLLOW_USER_FAILD,
    payload
});


export const fetchProfileUser = username => ({
    type: FETCH_PROFILE_REQUEST,
    username
});
export const fetchProfileSuccess = payload => ({
    type: FETCH_PROFILE_SUCCESS,
    payload
});
export const fetchProfileFaild = payload => ({
    type: FETCH_PROFILE_FAILD,
    payload
});


export const unFollowUserRequest = payload => ({
    type: UNFOLLOW_USER_REQUEST,
    payload
});
export const unFollowUserSuccess = payload => ({
    type: UNFOLLOW_USER_SUCCESS,
    payload
});
export const unFollowUserFaild = payload => ({
    type: UNFOLLOW_USER_FAILD,
    payload
});

