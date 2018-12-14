import { CHOOSE_CURRENT_TAG } from './../constants';

const initialState = ''

const reducerTag = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_CURRENT_TAG:
            return action.payload.tag;
        default:
            return state;
    }
}
export default reducerTag;