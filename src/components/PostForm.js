import React, { Component } from 'react';
import PostFormHoc from './../HOC/PostFormHoc';

class PostFormComponent extends Component {

    onAddAnCommnet = (event) => {
        event.preventDefault();
        const { params = {} } = this.props.match;
        const { commnet } = this.refs;
        this.props.onSubmit({ slug: params.slug, commnet: commnet.value });
        this.refs.commnet.value = '';
    }

    render() {
        return (
            <form className="card comment-form" onSubmit={this.onAddAnCommnet}>
                <div className="card-block">
                    <textarea ref="commnet" name="commnet" className="form-control" placeholder="Write a comment..." rows="3"></textarea>
                </div>
                <div className="card-footer">
                    <img alt='' src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                    <button className="btn btn-sm btn-primary" type='submit'>
                        Post Comment
                    </button>
                </div>
            </form>
        );
    }

}

export default PostFormHoc(PostFormComponent);





