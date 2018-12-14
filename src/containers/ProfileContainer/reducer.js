import {
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILD,
} from './constants';

const initialState = {
    user: {},
    errors: {},
};

const reducer = (state = initialState, action) => {

    const { currentUser = {}, errors = {} } = action;
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return { ...state, user: { ...currentUser }, errors: null };
        case FETCH_USER_FAILD:
            return { ...state, user: null, errors: { ...errors } };
        default:
            return { ...state };
    }
}

export default reducer;