import {
    YOUR_FEED,
    GLOBAL_FEED,
    MY_ARTICLES,
    FAVORITED_ARTICLES,
    ARTICLE_TAGS
} from './constants';

export const changeStatusYourFeed = () => ({
    type: YOUR_FEED
});

export const changeStatusGlobalFeed = () => ({
    type: GLOBAL_FEED
});

export const changeStatusMyArticles = () => ({
    type: MY_ARTICLES
});

export const changeStatusFavoritesArticles = () => ({
    type: FAVORITED_ARTICLES
});

export const changeStatusFeedTag = () =>({
    type: ARTICLE_TAGS
})