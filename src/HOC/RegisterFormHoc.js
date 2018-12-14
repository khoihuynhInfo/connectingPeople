import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { registrationRequest } from './../containers/RegisterFormContainer/actions';


const RegisterFormHoc = (RegisterForm) => {

    return class PostFormHoc extends Component {

        onRegister = (infoUserRegister) => {
            this.props.onRegistrationRequest(infoUserRegister);
        }

        render() {
            return (
                <RegisterForm
                    onRegister={this.onRegister}
                    Authenticated={this.props.Authenticated} />
            );
        }
    }
}



const mapStateToProps = state => ({
    Authenticated: state.AuthenReducer
});

const mapDispatchToProps = dispatch => ({
    onRegistrationRequest: (params) => dispatch(registrationRequest(params)),
});

const composedRegisterFormHoc = compose(
    connect(mapStateToProps,
        mapDispatchToProps, null, {
            pure: false
        }),
    RegisterFormHoc
)

export default composedRegisterFormHoc;  
