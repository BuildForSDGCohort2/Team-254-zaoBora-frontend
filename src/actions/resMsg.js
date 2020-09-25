import { SET_MSG, CLEAR_MSG } from '../utils/Constants';

export const setMsg = (msg) => ({
    type: SET_MSG,
    payload: msg
});

export const clearMsg = () => ({ type: CLEAR_MSG });