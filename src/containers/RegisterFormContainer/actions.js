import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE
} from './constants';


export const registrationRequest = (infoRegistation) => ({
    type: REGISTRATION_REQUEST,
    infoRegistation
});
export const registrationSuccess = payload => ({
    type: REGISTRATION_SUCCESS,
    payload
});
export const registrationFaild = payload => ({
    type: REGISTRATION_FAILURE,
    payload
});



