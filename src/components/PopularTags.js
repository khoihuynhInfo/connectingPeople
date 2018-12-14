import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PopularTags extends Component {

    componentDidMount() {
        this.props.onFetchPopularTags();
    }

    onFillterTags = (tag) => {
        this.props.onChangeStatusFeedTag();
        this.props.onChooseCurrentTag({tag: tag});
        this.props.onFillterTags({tag: tag});
    }

    render() {
        const { tags = [] } = this.props.tags;
        return (
            <div className="sidebar">
                <p>Popular Tags</p>
                <div className="tag-list">
                    {this.showListTag(tags)}
                </div>
            </div >
        );
    }

    showListTag = (tags) => {
        return (tags && tags.length)
            ? tags.map((tag, index) => {
                return (
                    <button 
                        style={{border:'none', outline: 'none'}}
                        onClick={() => this.onFillterTags(tag)}
                        key={index}
                        className="tag-pill tag-default">
                        {tag}
                    </button>
                );
            })
            : 'Loading tags...'
    }
}

PopularTags.propTypes = {
    onFetchPopularTags: PropTypes.func.isRequired,
    tags: PropTypes.object.isRequired
}


export default PopularTags;


