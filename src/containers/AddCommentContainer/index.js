import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCommentRequest } from './actions';
import { fetchArticleDetailRequest } from './../ArticleDetailContainer/actions';
import PostFormComponent from './../../components/PostForm';
import { withRouter } from 'react-router-dom';


class AddCommentContainer extends Component {

    // post comment to an Article 
    onSubmit = (comment) => {
        this.props.onAddCommentRequest(comment);
    }

    render() {
        const { match } = this.props;
        return (
            <PostFormComponent
                onSubmit={this.onSubmit}
                match={match}
            />
        );
    }
}


const mapStateToProps = state => ({
    commentReducer: state.AddCommnentReducer,
});


const mapDispatchToProps = dispatch => ({
    onAddCommentRequest: (comment) => dispatch(addCommentRequest(comment)),
    onFetchArticleDetailRequest: (params) => dispatch(fetchArticleDetailRequest(params)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AddCommentContainer));
    