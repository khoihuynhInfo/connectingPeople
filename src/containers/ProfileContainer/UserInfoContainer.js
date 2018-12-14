
import React, { Component } from 'react';
import UserInfo from './components/UserInfo';
import { connect } from 'react-redux';
import { fetchProfileUser } from './../ArticleMetaContainer/actions';
import { withRouter } from 'react-router-dom';
import { KEY_STORE } from './../../utils/constants';
import {
    followUserRequest,
    unFollowUserRequest
} from './../ArticleMetaContainer/actions';

class UserInfoContainer extends Component {

    componentDidMount() {
        this.props.onFetchProfileUser(this.props.match.params.username);
    }

    render() {
        const currentUser = JSON.parse(localStorage.getItem(KEY_STORE.INFOR_USER));
        // console.log('ProfileUser', this.props.ProfileUser);
        return (
            <UserInfo {...this.props.ProfileUser.profile}
                followUser={this.props.onFollowUserRequest}
                unFollowUser={this.props.onUnFollowUserRequest}
                currentUser={currentUser ? currentUser.username : undefined}
            />
        );
    }
}


const mapStateToProps = state => ({
    ProfileUser: state.ProfileUserReducer
});


const mapDispatchToProps = dispatch => ({
    onFetchProfileUser: (params) => dispatch(fetchProfileUser(params)),
    onFollowUserRequest: (user) => dispatch(followUserRequest(user)),
    onUnFollowUserRequest: (user) => dispatch(unFollowUserRequest(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(UserInfoContainer));



