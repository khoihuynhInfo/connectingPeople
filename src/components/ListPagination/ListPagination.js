import React, { Component } from 'react';
import { ARTICLES_API } from './../../utils/constants';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class ListPagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            curentPage: 1,
        }
    }

    getArticle = (index) => {
        const { isArticlesPreviewProfile, Tag } = this.props;
        this.setState({ curentPage: index });
        if (!isArticlesPreviewProfile) {
            const { FeedToggle = 1 } = this.props;
            if (FeedToggle === 1) {  // if is your feed
                this.props.onFetchArticlesYourFeedRequest(index);
            } else if (FeedToggle === -1) { // fetch Global feed
                this.props.onFetchArticlesRequest(index);
            } else if(FeedToggle === -2) { // fillter Tag at Home Page
                this.props.onFillterTags({index: index, tag: Tag})
            }
        } else {
            const { FeedToggle = 0 } = this.props;
            if (FeedToggle === 0) {   //  fillter articles
                this.props.onFillterArticles({index: index, username: this.props.match.params.username });
            } else if (FeedToggle === 2) { //fillter Favorited
                this.props.onFillterFavoriedArticles({index: index, username: this.props.match.params.username });
            }
        }

    }

    componentWillReceiveProps(nextProps) {
        // reset index List Pagination
        if (nextProps.FeedToggle !== this.props.FeedToggle) {
            this.setState({ curentPage: 1});
        }
    }

    render() {

        const { articlesCount = 0 } = this.props;
        const { curentPage } = this.state;
        return (
            <div
                className="ng-isolate-scope">
                <nav>
                    <ul className="pagination">
                        {this.showListPagination(articlesCount, curentPage)}
                    </ul>
                </nav>
            </div>
        );
    }

    showListPagination = (articlesCount, curentPage) => {
        let lengthArray = parseInt(articlesCount / (ARTICLES_API.LIMIT_ARTICLES));
        const residual = (articlesCount / 10) - lengthArray;
        if (residual) {
            lengthArray += 1;
        }
        return (lengthArray)
            ? [...new Array(lengthArray)].map((_, index) => {
                return (
                    <li
                        key={index + 1}
                        className={`${'page-item'}
                         ${((index + 1) === curentPage) ? 'active' : null} `}
                        onClick={() => this.getArticle(index + 1)}>

                        <div className="page-link"> {index + 1} </div>
                    </li>
                )
            })
            : null;
    }
}

ListPagination.propTypes = {
    articlesCount: PropTypes.number.isRequired
}

export default withRouter(ListPagination);


