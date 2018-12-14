import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <Link className="logo-font" to='/'>conduit</Link>
                    <span className="attribution">
                        An interactive learning project from <Link to='/'>Thinkster</Link>. Code &amp; design licensed under MIT.
              </span>
                </div>
            </footer>
        );
    }
}

export default Footer;


