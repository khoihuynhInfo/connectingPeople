import axios from 'axios';
import { URL_LINK } from './../config/enviroment/index';


// If API authenticated requied
const initialHeader = (haveAuthorized = false) => {
    let jwt = '';
    if (haveAuthorized) {
        jwt = localStorage.getItem('jwt');
    }
    return (jwt)
        ? {
            "Content-Type": "application/json",
            Authorization: `Token ${jwt}`,
        }
        : {
            "Content-Type": "application/json",
        };
}

// fetch api with axios
const fetchApi = ({
    method = 'GET',
    endpoint = '',
    data = null,
    params = {},
    haveAuthorized = false
}) => {
    const headers = { ...initialHeader(haveAuthorized) };
    return axios({
        method: method,
        url: `${URL_LINK}/${endpoint}`,
        data: data,
        params: params,
        headers: headers
    })
        .catch(err => {
            throw err.response;
        });
}

export default fetchApi;

