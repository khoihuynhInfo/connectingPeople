import {
    FETCH_TAGS_REQUEST,
    FETCH_TAGS_SUCCESS,
    FETCH_TAGS_FAILD,
} from './constants';

const initialState = {
    fetching: false,
    tags: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TAGS_REQUEST:
            return { ...state, fetching: true, error: null };
        case FETCH_TAGS_SUCCESS:
            return { ...state, fetching: false, tags: action.tags, error: null };
        case FETCH_TAGS_FAILD:
            return { ...state, fetching: false, tags: null, error: action.error };
        default:
            return { ...state };
    }
}

export default reducer;