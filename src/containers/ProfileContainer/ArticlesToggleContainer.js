
import React, { Component } from 'react';
import ArticlesToggle from './components/ArticlesToggle';
import { connect } from 'react-redux';
import {
    fillterArticlesRequest,
    fillterFavoritedRequest
} from './../ArticlesContainer/actions';
import {
    changeStatusMyArticles,
changeStatusFavoritesArticles
} from './../FeedToggleContainer/actions';

class ArticlesToggleContainer extends Component {

    render() {
        return (
            <ArticlesToggle
                fillterMyArticles={this.props.onFillterArticlesRequest}
                fillterFavoritedArticles={this.props.onFillterFavoritedRequest}
                changeStatusMyArticles={this.props.changeStatusMyArticles}
                changeStatusFavoritesArticles={this.props.changeStatusFavoritesArticles}
            />
        );
    }
}


const mapDispatchToProps = dispatch => ({
    onFillterArticlesRequest: (params) => dispatch(fillterArticlesRequest(params)),
    onFillterFavoritedRequest: (params) => dispatch(fillterFavoritedRequest(params)),
    changeStatusMyArticles: () => dispatch(changeStatusMyArticles()),
    changeStatusFavoritesArticles: () => dispatch(changeStatusFavoritesArticles())
});

export default connect(
    null,
    mapDispatchToProps
)(ArticlesToggleContainer);



