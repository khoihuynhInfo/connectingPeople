
import React, { Component } from 'react';
import Banner from './../../components/Banner';
import CommentComponet from './../../components/Comment';
import ArticleMeta from './../../components/ArticleMeta/ArticleMeta';
import ArticleDetailContainer from './../../containers/ArticleDetailContainer/index';
import AddCommentContainer from './../../containers/AddCommentContainer';

class ArticleDetailPage extends Component {
    render() {
        return (
            <div className="article-page">
                <Banner isHomePage={false}/>
                <div className="container page">
                    {/* DETAIL */}
                    <div className="row article-content">
                        <div className="col-md-12">
                            <ArticleDetailContainer />
                        </div>
                    </div>
                    <hr />
                    <div className="article-actions">
                        <ArticleMeta />
                    </div>

                    <div className="row">.
                        <div className="col-xs-12 col-md-8 offset-md-2">
                            <AddCommentContainer />
                            <CommentComponet />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ArticleDetailPage;



