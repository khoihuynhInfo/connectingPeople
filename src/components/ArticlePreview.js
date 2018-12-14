import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import {pipeDateYear} from './../utils/index';


class ArticlePreview extends Component {

    favoriteArticle = (slug, isLogined) => {
        if (isLogined) {
            this.props.favoriteArticle({
                slug: slug,
                index: this.props.indexPage,
                feedToggle: this.props.FeedToggle
            });
        } else {
            this.props.history.push('/register');
        }
    }

    unFavoriteArticle = (slug) => {
        this.props.unFavoriteArticle({
            slug: slug,
            index: this.props.indexPage,
            feedToggle: this.props.FeedToggle
        });
    }

    render() {
        const {
            title = '',
            description = '',
            favoritesCount = 0,
            updatedAt = '',
            author = {},
            slug = '',
            favorited = false,
            tagList = []
        } = this.props.article;
        const {
            image,
            username
        } = author;
        const {
            isLogined = false
        } = this.props.Authenticated;

        return (
            <div className="article-preview">
                <div className="article-meta">
                    <Link to={`/@${username}`} ><img alt='' src={image} /></Link>
                    <div className="info">
                        <Link to={`/@${username}`} className="author">{username}</Link>
                        <span className="date">{pipeDateYear(updatedAt)}</span>
                    </div>
                    {
                        favorited
                            ? <button
                                onClick={() => this.unFavoriteArticle(slug)}
                                className="btn btn-primary btn-sm pull-xs-right">
                                <i className="ion-heart"></i> {favoritesCount}
                            </button>
                            : <button
                                onClick={() => this.favoriteArticle(slug, isLogined)}
                                className="btn btn-outline-primary btn-sm pull-xs-right">
                                <i className="ion-heart"></i> {favoritesCount}
                            </button>
                    }

                </div>
                <Link to={`/article/${slug}`} className="preview-link">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <span>Read more...</span>

                    <ul className="tag-list">
                        {this.showTagList(tagList)}
                    </ul>
                </Link>
            </div>
        );
    }

    showTagList = (tagList) => {
        return (tagList && tagList.length)
            ? tagList.map((tag, index) => {
                return (
                    <li
                        key={index}
                        className="tag-default tag-pill tag-outline"> {tag}</li>
                )
            })
            : null
    }
}

ArticlePreview.propTypes = {
    article: PropTypes.object.isRequired
}

export default withRouter(ArticlePreview);


