import React, { Component, Fragment } from 'react';
import RegisterFormHoc from './../HOC/RegisterFormHoc';
import { withRouter } from 'react-router-dom';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    onChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.onRegister({ ...this.state, history: this.props.history });
    }
    render() {
        const { username = '', email = '', password = '' } = this.state;
        const { errors = {} } = this.props.Authenticated;
        return (
            <Fragment>
                {(typeof errors === 'object' && errors) ? this.showErrorRegister(errors) : null}
                <form onSubmit={this.onSubmit}>
                    <fieldset className="form-group">
                        <input
                            onChange={this.onChange}
                            value={username}
                            name="username" className="form-control form-control-lg" type="text" placeholder="Your Name" />
                    </fieldset>
                    <fieldset className="form-group">
                        <input
                            onChange={this.onChange}
                            value={email}
                            name="email" className="form-control form-control-lg" type="text" placeholder="Email" />
                    </fieldset>
                    <fieldset className="form-group">
                        <input
                            onChange={this.onChange}
                            value={password}
                            name="password" className="form-control form-control-lg" type="password" placeholder="Password" />
                    </fieldset>
                    <button className="btn btn-lg btn-primary pull-xs-right" type='submit'>
                        Sign up
                    </button>
                </form>
            </Fragment>
        );
    }

    showErrorRegister = (errors) => {
        const { email = [], password = [], username = [] } = errors;
        return (typeof errors === 'object' && errors)
            ? <ul className="error-messages">
                <Fragment> {
                    (email && email.length) ?
                        email.map((err, index) => {
                            return (<li key={index}>email {err}</li>)
                        }) : null
                }</Fragment>
                <Fragment> {
                    (password && password.length) ?
                        password.map((err, index) => {
                            return (<li key={index}>password {err}</li>)
                        }) : null
                }</Fragment>
                <Fragment> {
                    (username && username.length) ?
                        username.map((err, index) => {
                            return (<li key={index}>username {err}</li>)
                        }) : null
                }</Fragment>
            </ul>
            : null
    }
}

export default RegisterFormHoc(withRouter(RegisterForm));


