
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class UserInfo extends Component {

    followUser = (user) => {
        this.props.followUser(user);
    }

    unFollowUser = (user) => {
        this.props.unFollowUser(user);
    }


    render() {
        const {
            username = '',
            bio = '',
            image = '',
            following = false,
            currentUser = ''
        } = this.props;
        return (

            < Fragment >
                <img alt='' src={image} className="user-img" />
                <h4>{username}</h4>
                <p>
                    {bio}
                </p>
                {
                    (currentUser && currentUser === username)
                        ?
                        <Fragment>
                            <Link to='/settings' className="btn btn-sm btn-outline-secondary action-btn">
                                <i className="ion-gear-a"></i> Edit Profile Settings
                             </Link>
                        </Fragment>
                        :
                        <Fragment>
                            {
                                (following) ?
                                    <button
                                        onClick={() => this.unFollowUser(username)}
                                        className='btn btn-sm btn-secondary action-btn'>
                                        <i className="ion-plus-round"></i>Unfollow&nbsp;
                                        {username} <span className="counter"></span>
                                    </button>
                                    : <button
                                        onClick={() => this.followUser(username)}
                                        className='btn btn-sm btn-outline-secondary action-btn'>
                                        < i className="ion-plus-round"></i>Follow&nbsp;
                                        {username} <span className="counter"></span>
                                    </button>
                            }
                        </Fragment>
                }

            </Fragment >
        );
    }
}

export default UserInfo;



