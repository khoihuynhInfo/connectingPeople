import React, { Component, Fragment } from 'react';
import ArticleMetaHoc from './../../HOC/ArticleMetaHoc';
import { withRouter, Link } from 'react-router-dom';
import {pipeDateYear} from './../../utils/index';

class ArticleMeta extends Component {

    deleteArticle = () => {
        this.props.deleteArticle(this.props.match.params);
        this.props.history.push('/');
    }

    followUser = (user, isLogined) => {
        if (isLogined) {
            this.props.followUser(user);
        } else {
            this.props.history.push('/register');
        }
    }

    unFollowUser = (user) => {
        this.props.unFollowUser(user);
    }

    favoriteArticle = (isLogined) => {
        if (isLogined) {
            this.props.favoriteArticle(this.props.match.params);
        } else {
            this.props.history.push('/register');
        }
    }

    unFavoriteArticle = () => {
        this.props.unFavoriteArticle(this.props.match.params);
    }

    render() {
        const {
            profile = {},
            author = {},
            favoritesCount = 0,
            updatedAt,
            currentUser = '',
            favorited = false,
            slug = ''
        } = this.props;
        const {
            isLogined = false
        } = this.props.Authenticated;

        const { following = false } = profile;

        return (
            <div className="article-meta">
                <Link to={`/@${author.username}`} ><img alt='' src={author.image} /></Link>
                <div className="info">
                    <Link to={`/@${author.username}`} className="author">{author.username}</Link>
                    <span className="date">{pipeDateYear(updatedAt)}</span>
                </div>
                {
                    (currentUser && currentUser === author.username)
                        ?
                        < Fragment > {/* Author Article of current user */}
                            <Link to={`/editor/${slug}`} className="btn btn-outline-secondary btn-sm">
                                <i className="ion-edit"></i> Edit Article
                            </Link>
                            &nbsp;
                            <button className="btn btn-outline-danger btn-sm"
                                onClick={this.deleteArticle} >
                                <i className="ion-trash-a"></i> Delete Article
                            </button>
                        </Fragment>
                        :
                        <Fragment>  {/* Author Article of everyone */}
                            {
                                (following) ?
                                    <button
                                        onClick={() => this.unFollowUser(author.username)}
                                        className='btn btn-sm btn-secondary'>
                                        <i className="ion-plus-round"></i>&nbsp;Unfollow&nbsp;
                                    {author.username} <span className="counter"></span>
                                    </button>
                                    : <button
                                        onClick={() => this.followUser(author.username, isLogined)}
                                        className='btn btn-sm btn-outline-secondary'>
                                        < i className="ion-plus-round"></i>&nbsp;Follow&nbsp;
                                    {author.username} <span className="counter"></span>
                                    </button>
                            }
                            &nbsp;
                            {
                                (favorited)
                                    ?
                                    <Fragment>
                                        <button
                                            onClick={this.unFavoriteArticle}
                                            className="btn btn-sm btn-primary">
                                            <i className="ion-heart"></i>
                                            &nbsp; Unfavorite Article&nbsp;
                                    <span className="counter">( {favoritesCount})</span>
                                        </button>
                                    </Fragment>

                                    : <Fragment>
                                        <button
                                            onClick={() => this.favoriteArticle(isLogined)}
                                            className="btn btn-sm btn-outline-primary">
                                            <i className="ion-heart"></i>
                                            &nbsp;Favorite Article&nbsp;
                                    <span className="counter">({favoritesCount})</span>
                                        </button>
                                    </Fragment>
                            }
                        </Fragment>
                }
            </div>
        );
    }
}

export default ArticleMetaHoc(withRouter(ArticleMeta));

