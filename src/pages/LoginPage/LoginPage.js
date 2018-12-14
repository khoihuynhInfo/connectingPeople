import React, { Component } from 'react';
import LoginFormContainer from './../../containers/LoginFormContainer/index';

class LoginPage extends Component {

    render() {
        return (
            <div className="auth-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <LoginFormContainer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;