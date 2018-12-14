import React, { Component } from 'react';

class FeedToggle extends Component {

    
    style = {
        cursor: 'pointer',
        outline: 'none'
    }

    onYourFeed = () => {
        this.props.onYourFeed();
        this.props.onFetchArticlesYourFeedRequest();
    }
    onGlobalFeed = () => {
        this.props.onGlobalFeed();
        this.props.onFetchArticlesRequest();
    }

    render() {
        const { isLogined } = this.props.Authenticated;
        const { Tag = '', FeedToggle = '' } = this.props;
        return (
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">

                    <li className="nav-item">
                        <button
                            style={this.style}
                            className={`${'nav-link'} ${(FeedToggle === 1) ? 'active' : null}`}
                            onClick={this.onYourFeed}>
                            {(isLogined) ? 'Your Feed' : 'Global Feed'}
                        </button>
                    </li>
                    {
                        (isLogined) ? (
                            <li className="nav-item">
                                <button
                                    style={this.style}
                                    className={`${'nav-link'} ${(FeedToggle === -1) ? 'active' : null}`}
                                    onClick={this.onGlobalFeed}>Global Feed
                            </button>
                            </li>
                        ) : null
                    }
                    {
                        (FeedToggle === -2)
                            ?
                            (
                                <li className="nav-item">

                                    <button
                                        style={this.style}
                                        className={`${'nav-link'} ${(FeedToggle === -2) ? 'active' : null}`}>
                                        <i class="ion-pound"></i> {Tag}
                                    </button>

                                </li>
                            )
                            : null
                    }
                </ul>
            </div>
        );
    }
}

export default FeedToggle;


