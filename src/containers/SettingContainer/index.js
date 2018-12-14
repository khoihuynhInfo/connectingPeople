import React, { Component } from 'react';
import SettingForm from './../../components/SettingForm';
import { connect } from 'react-redux';
import { updateUserRequest, } from './actions';
import { fetchUserRequest } from './../ProfileContainer/actions';
import { userLogout } from './../LoginFormContainer/actions';
import { KEY_STORE } from './../../utils/constants';
import { withRouter } from 'react-router-dom';

class SettingContainer extends Component {

    componentDidMount() {
        // call fech current user for show which in setting form
        this.props.onFetchUserRequest();
    }
    onLogOut = () => {
        this.props.onUserLogout();
        this.props.history.push('/');
    }
    // submit form update profile 
    onSubmitUpdate = (dataUserSetting) => {
        this.props.updateUserRequest({ ...dataUserSetting, history: this.props.history });
    }

    render() {
        const inforUser = localStorage.getItem(KEY_STORE.INFOR_USER);
        return (
            <SettingForm
                Authenticated={this.props.Authenticated}
                onSubmitUpdate={this.onSubmitUpdate}
                inforUser={inforUser}
                onLogOut={this.onLogOut} />
        )
    }
}

const mapStateToProps = state => ({
    Authenticated: state.AuthenReducer,
    ProfileCurrentUser: state.ProfileReducer
});

const mapDispatchToProps = dispatch => ({
    updateUserRequest: (dataUserSetting = {}) =>
        dispatch(updateUserRequest(dataUserSetting)),
    onFetchUserRequest: () => { dispatch(fetchUserRequest()) },
    onUserLogout: () => { dispatch(userLogout()) }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SettingContainer));




