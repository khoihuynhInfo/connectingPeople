// ======== SETUP API ============

/**
 *  GET List Articles
 *  return multiple articles, ordered by most recent first
 *  Limit number of articles (default is 20):
 * Offset/skip number of articles (default is 0):
 */
export const ARTICLES_API = {
    METHOD: 'GET',
    ENDPOINT: 'articles',
    LIMIT_ARTICLES: 10,
    OFFSET_SKIP: 0
}

/**
 * Feed Articles
 * Authentication required,
 */


export const FEED_ARTICLES_API = {
    METHOD: 'GET',
    ENDPOINT: 'articles/feed',
    LIMIT_ARTICLES: 10,
    OFFSET_SKIP: 0
}

/**
 *  Get Tags
 *  returns a List of Tags
 * No authentication required, 
 */
export const TAGS_API = {
    METHOD: 'GET',
    ENDPOINT: 'tags',
}

/**
 * Authentication:
 * Required fields: email, password
 * 
 **/
export const AUTHENTICATION_API = {
    METHOD: 'POST',
    ENDPOINT: 'users/login',
}
/**
 * Update user:
 * Accepted fields: email, username, password, image, bio
 * 
 **/
export const UPDATE_USER = {
    METHOD: 'PUT',
    ENDPOINT: 'user',
}

// ERR REQUEST SERVER

export const ERR_REQUEST = {
    500: {
        status: 500,
        err: 'Internal Server Error',
    },
    401: {
        status: 401,
        err: 'email or password is invalid',
    },
    422: {
        status: 422,
        err: 'email or password is invalid',
    },
    DEFAULT: 'Something went wrong'
}


export const CURRENT_USER = {
    METHOD: 'GET',
    ENDPOINT: 'user',
}
/**
 * Get Article
 * GET /api/articles/:slug
 * No authentication required
 * 
 */

export const ARTICLE_DETAIL = {
    METHOD: 'GET',
    ENDPOINT: 'articles'
}
/**
 * Get Comments from an Article
 * GET /api/articles/:slug/comments
 * Authentication optional
*/
export const COMMENT_ARTICLE = {
    METHOD: 'GET',
    ENDPOINT: 'comments',

}

/**
 * Add Comments to an Article
 * POST /api/articles/:slug/comments
 * Required field: body
*/
export const ADD_COMMENT = {
    METHOD: 'POST',
    ENDPOINT: 'comments',
}

/**
 * Delete Comment
 * DELETE /api/articles/:slug/comments/:id
 * Required field: body
*/
export const DELETE_COMMENT = {
    METHOD: 'DELETE',
    ENDPOINT: 'comments',
}


/**
 * Delete Article
 * DELETE /api/articles/:slug
 * Authentication required
*/
export const DELETE_ARTICLE = {
    METHOD: 'DELETE',
    ENDPOINT: 'articles',
}



/**
 * Create Article
 * POST /api/articles
 * Authentication required
 * Required fields: title, description, body
 * Optional fields: tagList as an array of Strings
*/
export const CREATE_ARTICLE = {
    METHOD: 'POST',
    ENDPOINT: 'articles',
}

/**
 * Update Article
 * PUT /api/articles/:slug
 * Optional fields: title, description, body
 * The slug also gets updated when the title is changed
*/
export const UPDATE_ARTICLE = {
    METHOD: 'PUT',
    ENDPOINT: 'articles',
}



/**
 * Follow user
 * POST /api/profiles/:username/follow
 * Authentication required, returns a Profile

 * Required fields: title, description, body
 * Optional fields: tagList as an array of Strings
*/
export const FOLLOW_USER = {
    METHOD: 'POST',
    ENDPOINT: 'follow',
}

/**
 * Unfollow user
 * DELETE /api/profiles/:username/follow
 * Authentication required, returns a Profile
 * No additional parameters required
*/
export const UNFOLLOW_USER = {
    METHOD: 'DELETE',
    ENDPOINT: 'follow',
}

/**
 * Get Profile
 * GET /api/profiles/:username
 * Authentication required, returns a Profile
*/

export const PROFILE_USER = {
    METHOD: 'GET',
    ENDPOINT: 'profiles',
}


/**
 * Favorite Article
 * POST /api/articles/:slug/favorite
 * Authentication required, returns the Article
 * No additional parameters required
*/

export const FAVORITE_ARTICLE = {
    METHOD: 'POST',
    ENDPOINT: 'favorite',
}

/**
 * Unfavorite Article
 * DELETE /api/articles/:slug/favorite
 * Authentication required, returns the Article
 * No additional parameters required
*/

export const UNFAVORITE_ARTICLE = {
    METHOD: 'DELETE',
    ENDPOINT: 'favorite',
}
/**
 * Registration
 * POST /api/users
 * No authentication required, returns a User
 * Required fields: email, username, password
*/

export const REGISTRATION_ACCOUNT = {
    METHOD: 'POST',
    ENDPOINT: 'users',
}

/**
 * List Articles
 * GET /api/articles
 * Filter by author:
 * ?author=jake
 *  * https://conduit.productionready.io/api/articles?limit=10&offset=0&author=KleepFFq
*/

export const FILLTER_ARTICLES_AUTHOR = {
    METHOD: 'GET',
    ENDPOINT: 'articles',
    param: 'author'
}

/**
 * List Articles
 * GET /api/articles
 * Filter by author:
 * ?author=jake
 * https://conduit.productionready.io/api/articles?limit=10&offset=0&favorited=KleepFFq
*/

export const FILLTER_ARTICLES_FAVORITED = {
    METHOD: 'GET',
    ENDPOINT: 'articles',
    param: 'favorited'
}




/**
 *KEY LOCAL STORE
 *
 **/

export const KEY_STORE = {
    TOKEN: 'jwt',
    USER: {
        username: 'username',
        email: 'email'
    },
    INFOR_USER: 'INFOR_USER'
}

export const EVENT_KEY = {
    ENTER_KEY: 13,
    COMMA_KEY: 188,
    BACKSPACE_KEY: 8
}

