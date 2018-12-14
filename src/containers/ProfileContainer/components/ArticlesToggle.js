
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
// fillterArticlesRequest
class ArticlesToggle extends Component {
    styleArticles = {
        outline: 'none'
    }

    constructor(props) {
        super(props);
        this.state = {
            isFavoriteArticles: false
        }
    }

    fillterFavoritedArticles = () => {
        this.props.changeStatusFavoritesArticles();
        this.setState({ isFavoriteArticles: true });
        this.props.fillterFavoritedArticles( this.props.match.params);
    }

    fillterMyArticles = () => {
        this.props.changeStatusMyArticles();
        this.setState({ isFavoriteArticles: false });
        this.props.fillterMyArticles( this.props.match.params);
    }

    render() {
        const { isFavoriteArticles = false } = this.state;
        return (
            <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                    <li className="nav-item">
                        <button style={this.styleArticles}
                            onClick={this.fillterMyArticles}
                            className={`nav-link ${!isFavoriteArticles ? 'active' : null}`}>My Articles</button>
                    </li>
                    <li className="nav-item">
                        <button
                            onClick={this.fillterFavoritedArticles}
                            style={this.styleArticles} className={`nav-link ${isFavoriteArticles ? 'active' : null}`}>Favorited Articles</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default withRouter(ArticlesToggle);



