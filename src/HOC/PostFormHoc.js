import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from "redux";

const PostFormHoc = (PostFormComponent) => {
    return class PostFormHoc extends Component {
        render() {
            const { isLogined = false } = this.props.Authenticed;
            return (
                <Fragment>
                    {this.showRedirectLogin(isLogined)}
                </Fragment>
            );
        }

        showRedirectLogin = (isLogined) => {
            return (
                isLogined ? <PostFormComponent {...this.props} /> :
                    <p>
                        <Link to="/login">Sign in</Link> or
                        <Link to="/register">sign up</Link> to add comments on this article.
                    </p>
            )
        }
    }
}


const mapStateToProps = state => ({
    Authenticed: state.AuthenReducer
});

const composedPostFormHoc = compose(
    connect(mapStateToProps, null, null, {
        pure: false
    }),
    PostFormHoc
)

export default composedPostFormHoc;
