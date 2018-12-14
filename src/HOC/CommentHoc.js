
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { KEY_STORE } from './../utils/constants';
import { deleteCommentRequest } from './../containers/AddCommentContainer/actions';


const CommentHoc = (CommentComponent) => {
    return class CommentHoc extends Component {

        deleteComment = (data) => {
            const { slug = '' } = data.params;
            this.props.onDeleteCommentRequest({ idComment: data.id, slug: slug });
        }


        render() {
            const { comments = [] } = this.props.ArticlesDetail;
            const currentUser = JSON.parse(localStorage.getItem(KEY_STORE.INFOR_USER));
            return (
                (comments && comments.length)
                    ? <CommentComponent comments={comments}
                        deleteComment={this.deleteComment}
                        currentUser={currentUser ? currentUser.username : undefined}></CommentComponent>
                    : null
            );
        }
    }
}

const mapStateToProps = state => ({
    ArticlesDetail: state.ArticlesDetailReducer,
});


const mapDispatchToProps = dispatch => ({
    onDeleteCommentRequest: (params) => dispatch(deleteCommentRequest(params)),
});


const composedCommentHoc = compose(
    connect(mapStateToProps,
        mapDispatchToProps, null, {
            pure: false
        }),
    CommentHoc
)

export default composedCommentHoc;
