import { combineReducers } from 'redux';
import PopularTagsReducer from './../../containers/PopularTagsContainer/reducer';
import AuthenReducer from './../../containers/LoginFormContainer/reducer';
import FeedToggleReducer from './../../containers/FeedToggleContainer/reducer';
import ProfileReducer from './../../containers/ProfileContainer/reducer';
import {
    reducerAddAnComment as AddAnCommentReducer,
    reducerDeleteComment as DeleteCommentReducer
} from './../../containers/AddCommentContainer/reducer';
import {
    reducerDetailArticle as ArticlesDetailReducer,
    reducerDeleteArticle as DeleteArticleReducer
} from './../../containers/ArticleDetailContainer/reducer';
import FormArticleReducer from './../../containers/FormArticleContainer/reducer';
import ProfileUserReducer from './../../containers/ArticleMetaContainer/reducer';
import ArticleFeedReducer from './../../containers/ArticlesContainer/reducer';
import TagReducer from './../../containers/PopularTagsContainer/Tag/reducerTag';
 
const rootReducer = combineReducers({
    PopularTagsReducer,
    ArticleFeedReducer,
    AuthenReducer,
    FeedToggleReducer,
    ProfileReducer,
    ArticlesDetailReducer,
    AddAnCommentReducer,
    DeleteCommentReducer,
    DeleteArticleReducer,
    FormArticleReducer,
    ProfileUserReducer,
    TagReducer
});

export default rootReducer;