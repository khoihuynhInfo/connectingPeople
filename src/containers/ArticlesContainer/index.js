import React, { Component, Fragment } from 'react';
import ListPagination from './../../components/ListPagination/ListPagination';
import ArticlePreview from './../../components/ArticlePreview';
import { connect } from 'react-redux';
import {
    fetchArticlesRequest,
    fetchArticlesYourFeedRequest,
    fillterArticlesRequest,
    fillterFavoritedRequest,
    fillterTagsRequest
} from './actions';

import {
    favoriteArticleRequest,
    unFavoriteArticleRequest,
} from './../ArticleDetailContainer/actions';
import {
    changeStatusYourFeed,
    changeStatusGlobalFeed,
    changeStatusMyArticles,
    changeStatusFavoritesArticles
} from './../FeedToggleContainer/actions';
import { withRouter } from 'react-router-dom';

class ArticlesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isArticlesPreviewProfile: false
        }
    }
    //show Article, if isLogined show own feed else show default
    componentDidMount() {
        const { isLogined } = this.props.Authenticated;
        const { isArticlesPreviewProfile } = this.props;
        // If Home Page then fetch Articles
        if (isArticlesPreviewProfile) {
            this.props.changeStatusMyArticles();
            this.props.onFillterArticlesRequest(this.props.match.params);
        }
        else {
            if (isLogined) {
                this.props.onYourFeed();
                this.props.onFetchArticlesYourFeedRequest();
            } else {
                this.props.onGlobalFeed();
                this.props.onFetchArticlesRequest();
            }
        }
    }
    // page load first one
    componentWillMount() {
        this.setState({ isLoading: false });
    }
    // show loadding if load articles
    componentWillReceiveProps(nextProps) {
        this.setState({ isLoading: true });
        if (this.props.articles.articles !== nextProps.articles.articles) {
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 500);
        }
    }

    favoriteArticle = (data) => {
        const { slug = '', index = 0 } = data;
        this.props.onFavoriteArticleRequest({ slug: slug, index: index, feedToggle: this.props.FeedToggle });
    }

    unFavoriteArticle = (data) => {
        const { slug = '', index = 0 } = data;
        this.props.onUnFavoriteArticleRequest({ slug: slug, index: index, feedToggle: this.props.FeedToggle });
    }

    render() {
        const {
            articles = [],
            articlesCount = 0,
        } = this.props.articles;
        const { isLoading = true } = this.state;
        const { isArticlesPreviewProfile } = this.props;
        return (

            <Fragment>
                {
                    (articles && articles.length)
                        ? <Fragment>
                            {this.showArticlePreview(articles)}
                            {this.showLoading(isLoading)}
                            {/* if articles Count < 10 then dont show list Pagination */}
                            {
                                (articlesCount) > 10
                                    ? <ListPagination
                                        isArticlesPreviewProfile={isArticlesPreviewProfile}
                                        articlesCount={articlesCount}
                                        onFetchArticlesRequest={this.props.onFetchArticlesRequest}
                                        onFetchArticlesYourFeedRequest={this.props.onFetchArticlesYourFeedRequest}
                                        onFillterArticles={this.props.onFillterArticlesRequest}
                                        onFillterFavoriedArticles={this.props.onFillterFavoritedRequest}
                                        FeedToggle={this.props.FeedToggle}
                                        onFillterTags={this.props.onFillterTagsRequest}
                                        Tag={this.props.TagReducer}
                                    />
                                    : null
                            }
                        </Fragment>
                        : <div className="article-preview">Loading articles...</div>
                }
            </Fragment>
        );
    }

    showArticlePreview = (articles) => {
        return articles.map((article, index) => {
            return (
                <ArticlePreview
                    FeedToggle={this.props.FeedToggle}
                    indexPage={this.props.articles.index}
                    key={index} article={article}
                    favoriteArticle={this.favoriteArticle}
                    unFavoriteArticle={this.unFavoriteArticle}
                    Authenticated={this.props.Authenticated}
                />
            );
        });
    }

    showLoading = (isLoading) => {
        return (
            (isLoading)
                ? <div className="article-preview">Loading articles...</div>
                : null
        );
    }


}

const mapStateToProps = state => ({
    articles: state.ArticleFeedReducer,
    Authenticated: state.AuthenReducer,
    FeedToggle: state.FeedToggleReducer,
    TagReducer: state.TagReducer
});

const mapDispatchToProps = dispatch => ({

    onFetchArticlesRequest: (index) => dispatch(fetchArticlesRequest(index)),
    onFetchArticlesYourFeedRequest: (index) => dispatch(fetchArticlesYourFeedRequest(index)),
    onFavoriteArticleRequest: (params) => dispatch(favoriteArticleRequest(params)),
    onUnFavoriteArticleRequest: (params) => dispatch(unFavoriteArticleRequest(params)),

    onFillterArticlesRequest: (params) => dispatch(fillterArticlesRequest(params)),
    onFillterFavoritedRequest: (params) => dispatch(fillterFavoritedRequest(params)),

    changeStatusMyArticles: () => dispatch(changeStatusMyArticles()),
    changeStatusFavoritesArticles: () => dispatch(changeStatusFavoritesArticles()),

    onYourFeed: () => dispatch(changeStatusYourFeed()),
    onGlobalFeed: () => dispatch(changeStatusGlobalFeed()),

    onFillterTagsRequest: (params) => dispatch(fillterTagsRequest(params)),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ArticlesContainer));



