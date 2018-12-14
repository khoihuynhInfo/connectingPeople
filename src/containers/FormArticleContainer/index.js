import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createArticleRequest, updateArticleRequest } from './actions';
import FormArticleComponent from './../../components/FormArticle';
import { withRouter } from 'react-router-dom';
import { KEY_STORE } from './../../utils/constants';

class FormArticleContainer extends Component {
    // post comment to an Article 
    onCreateArticle = (article = {}) => {
        this.props.onCreateArticleRequest({ ...article, history: this.props.history });
    }

    onUpdateArticle = (article = {}) => {
        this.props.onUpdateArticleRequest({
            ...article,
            history: this.props.history,
            slug: this.props.match.params.slug
        });
    }

    render() {
        const { author = {} } = this.props.ArticlesDetail.article;
        const currentUser = JSON.parse(localStorage.getItem(KEY_STORE.INFOR_USER));
        // console.log(author.username, currentUser);
        return (
            <FormArticleComponent
                onUpdateArticle={this.onUpdateArticle}
                onCreateArticle={this.onCreateArticle}
                FormArticle={this.props.FormArticle}
                ArticlesDetail={
                    (this.props.ArticlesDetail
                        && currentUser
                        && currentUser.username === author.username)
                        ?
                        this.props.ArticlesDetail : {}
                }
            />
        );
    }
}


const mapStateToProps = state => ({
    commentReducer: state.AddCommnentReducer,
    FormArticle: state.FormArticleReducer,
    ArticlesDetail: state.ArticlesDetailReducer,
});

const mapDispatchToProps = dispatch => ({
    onCreateArticleRequest: (article) => dispatch(createArticleRequest(article)),
    onUpdateArticleRequest: (params) => dispatch(updateArticleRequest(params))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(FormArticleContainer));
