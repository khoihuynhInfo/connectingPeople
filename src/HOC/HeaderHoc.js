
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";

const HeaderHoc = (HeaderComponent) => {
    return class HeaderHoc extends Component {
    
        render() {
            return (
                <HeaderComponent {...this.props}></HeaderComponent>
            );
        }
    }

}

const mapStateToProps = state => ({
    Authenticed: state.AuthenReducer
});

const composedHeaderHoc = compose(
    connect(mapStateToProps, null, null, {
        pure: false
    }),
    HeaderHoc
)

export default composedHeaderHoc;
