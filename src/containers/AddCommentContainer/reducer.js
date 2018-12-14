import {
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILD,
    DELETE_COMMNET_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILD
} from './constants';

const initialState = {
    status: '',
    error: '',
};


const reducerAddAnComment = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT_SUCCESS:
            return { ...state, status: action.payload.status, error: null };
        case ADD_COMMENT_FAILD:
            return { ...state, status: '', error: null };
        default:
            return { ...state };
    }
}

const reducerDeleteComment = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_COMMNET_REQUEST:
            return { ...state, status: action.payload.status, error: null };
        case DELETE_COMMENT_SUCCESS:
            return { ...state, status: action.payload.status, error: null };
        case DELETE_COMMENT_FAILD:
            return { ...state, status: '', error: null };
        default:
            return { ...state };
    }
}


export {
    reducerAddAnComment,
    reducerDeleteComment
};