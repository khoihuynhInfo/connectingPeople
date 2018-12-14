import React, { Component } from 'react';
import FeedToggle from './../../components/FeedToggle';
import {
    fetchArticlesRequest,
    fetchArticlesYourFeedRequest
} from './../ArticlesContainer/actions';
import {
    changeStatusYourFeed,
    changeStatusGlobalFeed
} from './actions';
import { connect } from 'react-redux';


class FeedToggleContainer extends Component {

    render() {
        return (
            <FeedToggle
                Authenticated={this.props.Authenticated}
                onYourFeed={this.props.onYourFeed}
                onGlobalFeed={this.props.onGlobalFeed}
                onFetchArticlesRequest={this.props.onFetchArticlesRequest}
                onFetchArticlesYourFeedRequest={this.props.onFetchArticlesYourFeedRequest}
                Tag={this.props.TagReducer}
                FeedToggle={this.props.FeedToggle}
            />
        );
    }
}

const mapStateToProps = state => ({
    Authenticated: state.AuthenReducer,
    TagReducer: state.TagReducer,
    FeedToggle: state.FeedToggleReducer,
});

const mapDispatchToProps = dispatch => ({
    onYourFeed: () => dispatch(changeStatusYourFeed()),
    onGlobalFeed: () => dispatch(changeStatusGlobalFeed()),
    onFetchArticlesRequest: () => dispatch(fetchArticlesRequest()),
    onFetchArticlesYourFeedRequest: () => dispatch(fetchArticlesYourFeedRequest()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedToggleContainer);




