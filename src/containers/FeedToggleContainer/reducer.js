import {
    YOUR_FEED,
    GLOBAL_FEED,
    MY_ARTICLES,
    FAVORITED_ARTICLES,
    ARTICLE_TAGS
} from './constants';

/**
 *  Kind Aricle
 *If 1 is Your Feed, if -1 globalfeed
 */
const initialState = 1;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case YOUR_FEED: // fetch Your feed at Home page
            return 1;
        case GLOBAL_FEED: // fetch Global feed at Home page 
            return -1
        case MY_ARTICLES: // fillter articles at Profile
            return 0;
        case FAVORITED_ARTICLES: // fillter Favorited at Articles
            return 2;
        case ARTICLE_TAGS: // fillter Favorited at Articles
            return -2;
        default:
            return state;
    }
}

export default reducer; 
