import React, { Component } from 'react';
import PopularTags from './../../components/PopularTags';
import { connect } from 'react-redux';
import { fetchPopularTagsRequest, } from './actions';
import {fillterTagsRequest} from './../ArticlesContainer/actions';
import {chooseCurrentTag} from './Tag/actions';
import {changeStatusFeedTag} from './../FeedToggleContainer/actions';

class PopularTagsContainer extends Component {

    render() {
        return (
            <PopularTags
                onFetchPopularTags={this.props.onFetchPopularTags}
                tags={this.props.tags}
                onFillterTags={this.props.onFillterTagsRequest}
                onChooseCurrentTag={this.props.onChooseCurrentTag}
                onChangeStatusFeedTag={this.props.onChangeStatusFeedTag}
            />
        );
    }
}

const mapStateToProps = state => ({
    tags: state.PopularTagsReducer
});

const mapDispatchToProps = dispatch => ({
    onFetchPopularTags: () => dispatch(fetchPopularTagsRequest()),
    onFillterTagsRequest:(params) => dispatch(fillterTagsRequest(params)),
    onChooseCurrentTag:(params) => dispatch(chooseCurrentTag(params)),
    onChangeStatusFeedTag: () => dispatch(changeStatusFeedTag())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PopularTagsContainer);


