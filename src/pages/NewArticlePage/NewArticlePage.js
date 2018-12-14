import React, { Component } from 'react';
// import FormArticleComponent from './../../components/FormArticle';
import FormArticleContainer from './../../containers/FormArticleContainer/index';
class NewArticlePage extends Component {

    render() {
        return (
            <div className="editor-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 col-xs-12">
                            <FormArticleContainer />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default NewArticlePage;