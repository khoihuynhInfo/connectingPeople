import axios from 'axios';
import { URL_LINK } from './../config/enviroment/index';
import { KEY_STORE } from './../utils/constants';

// authentication user and store token in local store
export const authLogin = ({
    endpoint = '',
    email = '',
    password = ''
}) => {
    const options = {
        headers: { "Content-Type": "application/json" },
        user: { email: email, password: password }
    }

    return axios.post(`${URL_LINK}/${endpoint}`, options)
        .then(response => {
            const {
                status = 200,
                user = { token: undefined }
            } = response.data;

            if (status === 200
                && user.token
                && user.token.length > 10) {
                localStorage.setItem(
                    KEY_STORE.TOKEN, JSON.stringify(user.token)
                );
                localStorage.setItem(
                    KEY_STORE.INFOR_USER, JSON.stringify(user)
                );
                return user;
            }
        })
        .catch(err => {
            throw new Error(err.response.status);
        });
}

