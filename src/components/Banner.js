import React, { Component } from 'react';
import ArticleMeta from './../components/ArticleMeta/ArticleMeta';
import BannerHoc from './../HOC/BannerHoc';

class Banner extends Component {

    render() {
        const { title = '' } = this.props;
        return (
            <div className="banner">
                {
                    (title)
                        ? (
                            <div className="container">
                                <h1>{title}</h1>
                                <ArticleMeta />
                            </div>
                        )
                        : (
                            <div className="container">
                                <h1 className="logo-font">conduit</h1>
                                <p>A place to share your knowledge.</p>
                            </div>
                        )
                }
            </div>
        )
    }
}

export default BannerHoc(Banner);
