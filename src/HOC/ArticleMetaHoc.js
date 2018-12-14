
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { KEY_STORE } from './../utils/constants';
import { deleteArticleRequest } from './../containers/ArticleDetailContainer/actions';
import {
    followUserRequest,
    unFollowUserRequest
} from './../containers/ArticleMetaContainer/actions';
import {
    favoriteArticleRequest,
    unFavoriteArticleRequest
} from './../containers/ArticleDetailContainer/actions';

const ArticleMetaHoc = (ArticleMetaComponent) => {


    return class HeaderHoc extends Component {

        unFollowUser = (user) => {
            this.props.onUnFollowUserRequest(user);
        }

        followUser = (user) => {
            this.props.onFollowUserRequest(user);
        }

        deleteArticle = (data) => {
            const { slug = '' } = data;
            this.props.onDeleteArticleRequest({ slug: slug });
        }

        favoriteArticle = (data) => {
            const { slug = '' } = data;
            this.props.onFavoriteArticleRequest({ slug: slug });
        }

        unFavoriteArticle = (data) => {
            const { slug = '' } = data;
            this.props.onUnFavoriteArticleRequest({ slug: slug });
        }

        render() {
            const { profile = {} } = this.props.ProfileUser;
            const { article = {} } = this.props.ArticlesDetail;
            // const currentUser = JSON.parse(getSessionData(KEY_STORE.INFOR_USER));
            const currentUser = JSON.parse(localStorage.getItem(KEY_STORE.INFOR_USER));
            return (
                <ArticleMetaComponent {...article}
                    favoriteArticle={this.favoriteArticle}
                    unFavoriteArticle={this.unFavoriteArticle}
                    unFollowUser={this.unFollowUser}
                    profile={profile}
                    deleteArticle={this.deleteArticle}
                    followUser={this.followUser}
                    currentUser={currentUser ? currentUser.username : undefined}
                    Authenticated={this.props.Authenticated}>
                </ArticleMetaComponent>
            );
        }
    }
}

const mapStateToProps = state => ({
    Authenticated: state.AuthenReducer,
    ArticlesDetail: state.ArticlesDetailReducer,
    ProfileUser: state.ProfileUserReducer
});

const mapDispatchToProps = dispatch => ({
    onDeleteArticleRequest: (params) => dispatch(deleteArticleRequest(params)),
    onFollowUserRequest: (user) => dispatch(followUserRequest(user)),
    onUnFollowUserRequest: (user) => dispatch(unFollowUserRequest(user)),
    onFavoriteArticleRequest: (params) => dispatch(favoriteArticleRequest(params)),
    onUnFavoriteArticleRequest: (params) => dispatch(unFavoriteArticleRequest(params))
});

const composedArticleMetaHoc = compose(
    connect(mapStateToProps,
        mapDispatchToProps, null, {
            pure: false
        }),
    ArticleMetaHoc
)

export default composedArticleMetaHoc;  