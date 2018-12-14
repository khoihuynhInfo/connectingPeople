import fetchApi from './api';
import {
    FOLLOW_USER,
    PROFILE_USER,
    UNFOLLOW_USER
} from './../utils/constants';

// follow user 
export const providerFollowUser = (username) => {
    const options = {
        method: FOLLOW_USER.METHOD,
        endpoint: `${PROFILE_USER.ENDPOINT
            }/${username
            }/${FOLLOW_USER.ENDPOINT
            }`,
        data: null,
        haveAuthorized: true
    };
    return fetchApi(options);
}

// fetch profile
export const providerFetchProfile = (username) => {
    const options = {
        method: PROFILE_USER.METHOD,
        endpoint: `${PROFILE_USER.ENDPOINT
            }/${username}`,
        data: null,
        haveAuthorized: true
    };
    return fetchApi(options);
}

// unfollow user
export const providerUnFollowUser = (username) => {
    const options = {
        method: UNFOLLOW_USER.METHOD,
        endpoint: `${PROFILE_USER.ENDPOINT
            }/${username
            }/${FOLLOW_USER.ENDPOINT
            }`,
        data: null,
        haveAuthorized: true
    };
    return fetchApi(options);
}
