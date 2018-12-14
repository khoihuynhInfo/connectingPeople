
import React, { Component } from 'react';
import UserInfoContainer from './../../containers/ProfileContainer/UserInfoContainer';
import ArticlesContainer from './../../containers/ArticlesContainer/index';
import ArticlesToggleContainer from './../../containers/ProfileContainer/ArticlesToggleContainer';

class ProfilePage extends Component {
    render() {
        return (
            <div className="profile-page">

                <div className="user-info">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 col-md-10 offset-md-1">
                                <UserInfoContainer />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <ArticlesToggleContainer />
                            <ArticlesContainer isArticlesPreviewProfile={true} />
                            {/* <div className="article-preview">
                                <div className="article-meta">
                                    <a href=""><img alt='' src="http://i.imgur.com/Qr71crq.jpg" /></a>
                                    <div className="info">
                                        <a href="" className="author">Eric Simons</a>
                                        <span className="date">January 20th</span>
                                    </div>
                                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                        <i className="ion-heart"></i> 29
                                   </button>
                                </div>
                                <a href="" className="preview-link">
                                    <h1>How to build webapps that scale</h1>
                                    <p>This is the description for the post.</p>
                                    <span>Read more...</span>
                                </a>
                            </div>

                            <div className="article-preview">
                                <div className="article-meta">
                                    <a href=""><img alt='' src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
                                    <div className="info">
                                        <a href="" className="author">Albert Pai</a>
                                        <span className="date">January 20th</span>
                                    </div>
                                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                        <i className="ion-heart"></i> 32
                                    </button>
                                </div>
                                <a href="" className="preview-link">
                                    <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                                    <p>This is the description for the post.</p>
                                    <span>Read more...</span>
                                    <ul className="tag-list">
                                        <li className="tag-default tag-pill tag-outline">Music</li>
                                        <li className="tag-default tag-pill tag-outline">Song</li>
                                    </ul>
                                </a>
                            </div> */}


                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default ProfilePage;



