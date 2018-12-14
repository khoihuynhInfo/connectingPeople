import React, { Component, Fragment } from 'react';
import { EVENT_KEY } from './../utils/constants';
import { withRouter } from 'react-router-dom';

class FormArticleComponent extends Component {
    constructor(props) {
        super(props);
        const { article = {} } = this.props.ArticlesDetail;
        const {
            title = '',
            description = '',
            body = '',
            tagList = [],
        } = article;
        this.state = {
            title: title ? title : '',
            description: description ? description : '',
            body: body ? body : '',
            tags: tagList ? tagList : []
        }
        // if  refesh article page then go home
        if (Object.keys(this.props.match.params).length !== 0
            && Object.keys(article).length === 0) {
            this.props.history.push('/');
        }
    }

    // create article
    onCreateArticle = () => {
        this.props.onCreateArticle({ ...this.state });
    }

    onUpdateArticle = () => {
        this.props.onUpdateArticle({ ...this.state });
    }
    onChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleKeyUp = event => {
        event.preventDefault();
        const key = event.keyCode;
        if (key === EVENT_KEY.ENTER_KEY) {
            this.addTag();
            this.refs.tag.value = '';
        }
    }

    addTag = () => {
        const { tags = [] } = this.state;
        const tag = this.refs.tag.value;
        const hadTag = [...tags].find(e => e === tag);
        if (!hadTag && tag.trim()) { // check duplicate tag and empty tag
            this.setState({ tags: [...tags, tag] });
        }
    }

    removeTag = tag => {
        const { tags = [] } = this.state;
        const newtags = [...tags].filter(e => e !== tag);
        this.setState({ tags: newtags });
    }

    render() {
        const { tags = [], title = '', description = '', body = '' } = this.state;
        const { status, errors } = this.props.FormArticle;
        return (
            <Fragment>
                {(status === 422) ? this.showError(errors) : null}
                <form>
                    <fieldset>
                        <fieldset className="form-group">
                            <input
                                value={title}
                                onChange={this.onChange}
                                name="title" type="text" className="form-control form-control-lg" placeholder="Article Title" />
                        </fieldset>
                        <fieldset className="form-group">
                            <input
                                value={description}
                                onChange={this.onChange}
                                name="description" type="text" className="form-control" placeholder="What's this article about?" />
                        </fieldset>
                        <fieldset className="form-group">
                            <textarea
                                value={body}
                                onChange={this.onChange}
                                name="body" className="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
                        </fieldset>
                        <fieldset className="form-group">
                            <input
                                ref="tag"
                                name="tags"
                                type="text"
                                className="form-control"
                                onKeyUp={this.handleKeyUp}
                                placeholder="Enter tags" />
                            <div className="tag-list"></div>
                        </fieldset>
                        {/* tags */}
                        <div className="tag-list">
                            {this.showTag(tags)}
                        </div>
                        {/*   Publish Article */}
                        {
                            (Object.keys(this.props.match.params).length !== 0)
                                ? <button
                                    onClick={this.onUpdateArticle}
                                    className="btn btn-lg pull-xs-right btn-primary" type="button">
                                    Update Article
                                </button>
                                : <button
                                    onClick={this.onCreateArticle}
                                    className="btn btn-lg pull-xs-right btn-primary" type="button">
                                    Publish Article
                                 </button>
                        }

                    </fieldset>
                </form>
            </Fragment>
        );
    }

    showTag = (tags) => {
        return tags.map((tag, index) => {
            return (
                <span className="tag-default tag-pill"
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.removeTag(tag)} key={index}>
                    <i className="ion-close-round"></i>{tag}
                </span>
            );
        })
    }


    showError = (errors) => {
        const { title = [], body = [], description = [] } = errors;
        return (
            <ul className="error-messages">
                <div>
                    {(title && title.length)
                        ? title.map((title, index) => {
                            return (
                                <li key={index}>title {title}</li>
                            )
                        }) : null}
                </div>
                <div>
                    {(body && body.length)
                        ? body.map((body, index) => {
                            return (
                                <li key={index}>body {body}</li>
                            )
                        }) : null}
                </div>
                <div>
                    {(description && description.length)
                        ? description.map((description, index) => {
                            return (
                                <li key={index}>description {description}</li>
                            )
                        }) : null}
                </div>
            </ul >
        )
    }
}


export default withRouter(FormArticleComponent);


