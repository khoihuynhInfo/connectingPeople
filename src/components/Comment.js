
import React, { Component } from 'react';
import CommentHoc from './../HOC/CommentHoc';
import { withRouter, Link } from 'react-router-dom';


class CommentComponet extends Component {

    deleteComment = (idComment) => {
        this.props.deleteComment({id: idComment, params:this.props.match.params});
    }

    render() {
        const { comments = [], currentUser = '' } = this.props;
        return (
            comments.map((commnet, index) => {
                return (
                    <div className="card" key={index}>
                        <div className="card-block">
                            <p className="card-text">{commnet.body}</p>
                        </div>
                        <div className="card-footer">
                            <Link to={`/@${commnet.author.username}`} className="comment-author">
                                <img alt='' src={commnet.author.image} className="comment-author-img" />
                            </Link>
                            &nbsp;
                            <Link to={`/@${commnet.author.username}`} className="comment-author">{commnet.author.username}</Link>
                            <span className="date-posted">{commnet.createdAt}</span>
                            {
                                (currentUser && currentUser === commnet.author.username)
                                    ?
                                    <span className="mod-options" onClick={() => this.deleteComment(commnet.id)}>
                                        <i className="ion-trash-a"></i>
                                    </span>
                                    : null
                            }
                        </div>
                    </div>
                )

            })
        );
    }
}

export default CommentHoc(withRouter(CommentComponet));



