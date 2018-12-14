
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";

const BannerHoc = (BannerComponent) => {
    return class BannerHoc extends Component {
        render() {
            const { article = {} } = this.props.ArticlesDetail;
            const { isLogined = false } = this.props.Authenticed;
            const { isHomePage } = this.props;

            return (
                <Fragment>
                    {isHomePage
                        ? (
                            (isLogined) ? null : <BannerComponent></BannerComponent>
                        )
                        : <BannerComponent {...article} ></BannerComponent>
                    }
                </Fragment>

            );
        }
    }

}

const mapStateToProps = state => ({
    ArticlesDetail: state.ArticlesDetailReducer,
    Authenticed: state.AuthenReducer
});

const composedBannerHoc = compose(
    connect(mapStateToProps, null, null, {
        pure: false
    }),
    BannerHoc
)

export default composedBannerHoc;
