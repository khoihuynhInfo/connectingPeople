import React, { Component, Fragment } from 'react';

class SettingForm extends Component {

    constructor(props) {
        super(props);
        const inforUser = JSON.parse(this.props.inforUser);
        const {
            image = '',
            username = '',
            bio = '',
            email = ''
        } = inforUser;
        this.state = {
            image: image ? image : '',
            username: username ? username : '',
            bio: bio ? bio : '',
            email: email ? email : '',
            password: ''
        }
    }


    onChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    onSubmitUpdate = event => {
        event.preventDefault();
        this.props.onSubmitUpdate({ ...this.state });
    }

    onLogOut = () => {
        this.props.onLogOut();
    }


    render() {
        const { errors = {} } = this.props.Authenticated;

        return (
            <Fragment>
                <h1 className="text-xs-center">Your Settings</h1>
                {(typeof errors === 'object' && errors) ? this.showError(errors) : null}
                <form onSubmit={this.onSubmitUpdate}>
                    <fieldset>
                        <fieldset className="form-group">
                            <input
                                onChange={this.onChange}
                                name='image'
                                value={this.state.image}
                                className="form-control" type="text" placeholder="URL of profile" />
                        </fieldset>
                        <fieldset className="form-group">
                            <input
                                onChange={this.onChange}
                                name='username'
                                value={this.state.username}
                                className="form-control form-control-lg" type="text" placeholder="Your Name" />
                        </fieldset>
                        <fieldset className="form-group">
                            <textarea
                                onChange={this.onChange}
                                name='bio'
                                value={this.state.bio}
                                className="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
                        </fieldset>
                        <fieldset className="form-group">
                            <input
                                onChange={this.onChange}
                                name='email'
                                value={this.state.email}
                                className="form-control form-control-lg" type="text" placeholder="Email" />
                        </fieldset>
                        <fieldset className="form-group">
                            <input
                                onChange={this.onChange}
                                name='password'
                                value={this.state.password}
                                className="form-control form-control-lg" type="password" placeholder="Password" />
                        </fieldset>
                        <button
                            type="submit"
                            className="btn btn-lg btn-primary pull-xs-right">
                            Update Settings
                                    </button>
                    </fieldset>
                </form>
                <hr />
                <button className="btn btn-outline-danger" onClick={this.onLogOut}>
                    Or click here to logout.
                </button>
            </Fragment>

        );
    }

    showError = (errors) => {
        const { email = [], username = [] } = errors;
        return (
            <ul className="error-messages" >
                {(email && email.length) ? (
                    <div className="ng-scope">
                        {email.map((err, index) => {
                            return (
                                <li
                                    key={index}
                                 >
                                    email {err}
                                </li>
                            );
                        })} </div>) : null}

                {(username && username.length) ? (
                    <div className="ng-scope">
                        {username.map((err, index) => {
                            return (
                                <li
                                    key={index}
                                >
                                    username {err}
                                </li>
                            );
                        })}</div>) : null}
            </ul>
        );
    }

}

export default SettingForm;


