import {
    FOLLOW_USER_SUCCESS,
    FOLLOW_USER_FAILD,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILD,
    UNFOLLOW_USER_SUCCESS,
    UNFOLLOW_USER_FAILD
} from './constants';

const initialState = {
    profile: {},
    status: 401,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload.data ? { ...action.payload.data.profile } : null,
                status: action.payload.status ? action.payload.status : null,
                error: null
            };
        case FETCH_PROFILE_FAILD:
            return {
                ...state,
                profile: null,
                status: action.payload.status,
                error: undefined
            };
        case FOLLOW_USER_SUCCESS:
            return {
                ...state,
                profile: action.payload.data ? { ...action.payload.data.profile } : null,
                status: action.payload.status ? action.payload.status : null,
                error: null
            };
        case FOLLOW_USER_FAILD:
            return {
                ...state,
                profile: null,
                status: action.payload.status,
                error: undefined
            };
        case UNFOLLOW_USER_SUCCESS:
            return {
                ...state,
                profile: action.payload.data ? { ...action.payload.data.profile } : null,
                status: action.payload.status ? action.payload.status : null,
                error: null
            };
        case UNFOLLOW_USER_FAILD:
            return {
                ...state,
                profile: null,
                status: action.payload.status,
                error: undefined
            };
        default:
            return { ...state };
    }
}


export default reducer;