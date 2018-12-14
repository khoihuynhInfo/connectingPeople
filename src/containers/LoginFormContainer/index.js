import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './../../components/LoginForm';
import { authenRequest } from './actions';
import { Redirect } from 'react-router-dom';

class LoginFormContainer extends Component {

    // call function handle login with usename, password
    onSubmit = (userlogin = {}) => {
        const { email, password } = userlogin;
        this.props.onAuthenRequest({ email, password });
    }

    render() {
        const { isLogined } = this.props.Authenticated;
        // if isLogined then Redirect into else stay form login
        if (isLogined) {
            return <Redirect to='/' />;
        }
        return (
            <LoginForm
                onSubmit={this.onSubmit}
                Authenticated={this.props.Authenticated}
            />
        );
    }
}

const mapStateToProps = state => ({
    Authenticated: state.AuthenReducer
});

const mapDispatchToProps = dispatch => ({
    onAuthenRequest: (infoLogin = {}) => dispatch(authenRequest(infoLogin))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginFormContainer);



