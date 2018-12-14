import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchArticleDetailRequest } from './actions';
import { withRouter } from 'react-router-dom';

class ArticleDetailContainer extends Component {

    componentDidMount() {
        // Fetch detail articles 
        const { params } = this.props.match;
        this.props.onFetchArticleDetailRequest(params);
    }

    render() {
        const { article = {} } = this.props.ArticlesDetail;
        const {
            tagList = [],
            body = ''
        } = article;
        return (
            <Fragment>
                <p>{body}</p>
                {
                    (tagList && tagList.length)
                        ? <ul className="tag-list">
                            {this.showTagList(tagList)}
                        </ul>
                        : null
                }

            </Fragment>
        );
    }

    // show tag list article 
    showTagList = (tagList) => {
        return tagList.map((tag, index) => {
            return <li key={index}
                className="tag-default tag-pill tag-outline" >
                {tag}
            </li>
        })
    }

}

const mapStateToProps = state => ({
    ArticlesDetail: state.ArticlesDetailReducer,
});

const mapDispatchToProps = dispatch => ({
    onFetchArticleDetailRequest: (params) => dispatch(fetchArticleDetailRequest(params)),

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ArticleDetailContainer));



