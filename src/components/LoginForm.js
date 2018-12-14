import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    // get username and password
    onChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    // Submit login form
    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        const { email = '', password = '', } = this.state;
        const { error = '', isLogined } = this.props.Authenticated;

        return (
            <Fragment>
                <h1 className="text-xs-center">Sign in</h1>
                <p className="text-xs-center">
                    <NavLink to="/register">Need an account?</NavLink>
                </p>
                {/* Redirect when authenticed, show error if failed */}
                {this.showErrorLogin(isLogined, error)}
                <form onSubmit={this.onSubmit}>
                    <fieldset className="form-group">
                        <input
                            value={email}
                            name="email"
                            onChange={this.onChange}
                            className="form-control form-control-lg"
                            type="email"
                            placeholder="Email" />
                    </fieldset>
                    <fieldset className="form-group">
                        <input
                            value={password}
                            name="password"
                            onChange={this.onChange}
                            className="form-control form-control-lg"
                            type="password"
                            placeholder="Password" />
                    </fieldset>
                    <button
                        type="submit"
                        className="btn btn-lg btn-primary pull-xs-right">
                        Sign in
                    </button>
                </form>
            </Fragment>
        );
    }

    showErrorLogin = (isLogined, error) => {
        return (isLogined)
            ? undefined
            : (
                <ul className="error-messages">
                    {error ? <li>{error}</li> : ''}
                </ul>
            )
    }
}

export default LoginForm;


