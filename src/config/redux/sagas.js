import { all, fork } from 'redux-saga/effects';
import { watchPopularTagsSaga } from './../../containers/PopularTagsContainer/saga';
import { watchArticles } from './../../containers/ArticlesContainer/saga';
import { watchAuthen } from './../../containers/LoginFormContainer/saga';
import { watchUpdateUserSaga } from './../../containers/SettingContainer/saga';
import { watchFetchCurrentUserSaga } from './../../containers/ProfileContainer/saga';
import { watchArticleDetail } from './../../containers/ArticleDetailContainer/saga';
import { watchAnComment } from './../../containers/AddCommentContainer/saga';
import { watchFormArticle } from './../../containers/FormArticleContainer/saga';
import { watchAuthorUser } from './../../containers/ArticleMetaContainer/saga';
import { watchRegistration } from './../../containers/RegisterFormContainer/saga';

export default function* rootSaga() {
    yield all([
        fork(watchPopularTagsSaga),
        fork(watchArticles),
        watchAuthen(),
        watchUpdateUserSaga(),
        fork(watchFetchCurrentUserSaga),
        watchArticleDetail(),
        watchAnComment(),
        watchFormArticle(),
        watchAuthorUser(), // Follow user and fetch profile user
        watchRegistration()
    ]);
}

