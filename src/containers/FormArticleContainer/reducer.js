import {
    CREATE_ARTICLE_SUCCESS,
    CREATE_ARTICLE_FAILD,
    UPDATE_ARTICLE_SUCCESS,
    UPDATE_ARTICLE_FAILD
} from './constants';

const initialState = {
    status: '',
    errors: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ARTICLE_SUCCESS:
            return { ...state, status: action.payload.status, error: null };
        case CREATE_ARTICLE_FAILD:
            return {
                ...state,
                status: action.error ? action.error.status : null,
                errors: action.error ? action.error.data.errors : null
            };
        case UPDATE_ARTICLE_SUCCESS:
            return { ...state, status: action.payload.status, error: null };
        case UPDATE_ARTICLE_FAILD:
            return {
                ...state,
                status: action.error ? action.error.status : null,
                errors: action.error ? action.error.data.errors : null
            };
        default:
            return { ...state };
    }
}

export default reducer;