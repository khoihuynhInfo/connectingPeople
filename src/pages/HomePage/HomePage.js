import React, { Component } from 'react';
import Banner from './../../components/Banner';
import FeedToggleContainer from './../../containers/FeedToggleContainer/index';
import PopularTagsContainer from './../../containers/PopularTagsContainer/index';
import ArticlesContainer from './../../containers/ArticlesContainer/index';

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Banner isHomePage={true} />
                <div className="container page">
                    <div className="row">
                        <div className="col-md-9">
                            <FeedToggleContainer />
                            <ArticlesContainer isArticlesPreviewProfile={false} />
                        </div>
                        <div className="col-md-3">
                            <PopularTagsContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;


