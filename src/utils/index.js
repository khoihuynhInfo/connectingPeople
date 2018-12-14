import * as moment from 'moment';

const getSessionData = (key = '') => {
    let data = sessionStorage.getItem(key);
    return data;
    // return (data) ? JSON.parse(data) : data;
}

const setSessionData = (key, value) => {
    console.log('key', { key, value });
    sessionStorage.setItem(
        key, (typeof value !== "string")
            ? JSON.stringify(value)
            : value
    );
};

const pipeDateYear = (datestring) => {
    return moment(datestring).format('MMMM DD,YYYY');
}

export {
    getSessionData,
    setSessionData,
    pipeDateYear
};