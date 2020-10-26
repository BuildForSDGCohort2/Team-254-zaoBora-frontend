import {
    REGISTER_FAIL_MSG,
    REGISTER_SUCCESS_MSG,
    LOGIN_FAIL_MSG,
    LOGIN_SUCCESS_MSG,
    LOGOUT_SUCCESS_MSG,
    LOGOUT_FAIL_MSG,
    CLEAR_MSG
} from '../utils/Constants';


export const alertRegisterFail = (msg) => ({
    type: REGISTER_FAIL_MSG,
    payload: msg
});

export const alertRegisterSuccess = (msg) => ({
    type: REGISTER_SUCCESS_MSG,
    payload: msg
});

export const alertLoginFail = (msg) => ({
    type: LOGIN_FAIL_MSG,
    payload: msg
});

export const alertLoginSuccess = (msg) => ({
    type: LOGIN_SUCCESS_MSG,
    payload: msg
});

export const alertLogoutFail = (msg) => ({
    type: LOGOUT_FAIL_MSG,
    payload: msg
});

export const alertLogoutSuccess = (msg) => ({
    type: LOGOUT_SUCCESS_MSG,
    payload: msg
});

export const clearMsg = () => ({ type: CLEAR_MSG });