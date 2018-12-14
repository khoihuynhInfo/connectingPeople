import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderHoc from './../HOC/HeaderHoc';
import PropTypes from 'prop-types';

class Header extends Component {

    render() {
        const { isLogined = false, user = {} } = this.props.Authenticed;
        const { username = '', image = '' } = user;

        return (
            <nav className="navbar navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="index.html">conduit</a>
                    <ul className="nav navbar-nav pull-xs-right">

                        <li className="nav-item">
                            <NavLink activeClassName="active" className='nav-link' exact to="/">Home </NavLink>
                        </li>
                        {/* if user isLogined then show a few item required  */}
                        {(isLogined) ?
                            (<Fragment>
                                <li className="nav-item">
                                    <NavLink
                                        to="/editor"
                                        className='nav-link'
                                        activeClassName="active"
                                    >
                                        <i className="ion-compose"></i>&nbsp;New Article
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/settings"
                                        className='nav-link'
                                        activeClassName="active"
                                    >
                                        <i className="ion-gear-a"></i>&nbsp;Settings
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to={`/Profile@${username}`}
                                        className='nav-link'
                                        activeClassName="active">
                                        <img alt='' className='user-pic' src={image} />
                                        {username}
                                    </NavLink>
                                </li>
                            </Fragment>)
                            : undefined
                        }
                        {(isLogined) ? undefined :
                            (<Fragment>
                                <li className="nav-item">
                                    <NavLink
                                        className='nav-link' to="/login" activeClassName='active'>Sign in
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className='nav-link' to="/register" activeClassName='active'>Sign up
                                    </NavLink>
                                </li>
                            </Fragment>)
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}


Header.propTypes = {
    Authenticed: PropTypes.object.isRequired,
}

export default HeaderHoc(Header);


