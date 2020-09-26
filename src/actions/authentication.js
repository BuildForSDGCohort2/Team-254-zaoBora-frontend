/**
* Authentication Actions
*/

import axios from 'axios'

import { history } from '../routers/AppRouter';
import {
	LOGIN_SUCCESS,
	REGISTER_SUCCESS,
	BASE_URL,
	DEV_BASE_URL,
	SET_MSG,
	CLEAR_MSG,
	CHECK_AUTH_STATE
} from '../utils/Constants'
import CookieStorage from '../utils/CookieStorage';
import { forceRefreshToken } from '../utils/Common';


const cookieStorage = new CookieStorage();

export const fetchActiveUser = ({ access_token, refresh_token }) => async (dispatch) => {
	const defaultPayload = {
		user: null,
		authenticated: false,
		access_token: "",
		refresh_token: ""
	}
	
	if (!access_token && !access_token) {
		return dispatch({
			type: CHECK_AUTH_STATE,
			payload: defaultPayload
		})
	}

    try {
		const headers = {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${access_token}`
		}
		const payload = await axios.get(`${DEV_BASE_URL}/fetch-active-user`, { headers });
		cookieStorage.setCookie(JSON.stringify(payload))

		dispatch({
			type: CHECK_AUTH_STATE,
			payload
		})
	} catch(e) {
		const error = e.response.data;
		console.log(error)

		switch(error.msg) {
			case 'Token has expired':
				forceRefreshToken(refresh_token, fetchActiveUser)
				break;
			case 'Token has been revoked':
			case 'Signature verification failed':
				cookieStorage.eraseCookie()
				dispatch({
					type: CHECK_AUTH_STATE,
					payload: defaultPayload
				})
				break;
			default:
				return;
		}
	}
}

export const loginUser = userDetails => async (dispatch) => {
	try {
		const res = await axios.post(`${DEV_BASE_URL}/auth/login`, userDetails);
		window.location.replace('/#/profile');
		const authUser = {
			user: res.data.user,
			authenticated: res.data.authenticated,
			access_token: res.data.access_token,
			refresh_token: res.data.refresh_token
		}
		console.log(authUser)
		const storeUser = JSON.stringify(authUser);

		cookieStorage.setCookie('user', storeUser, 30);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: authUser
		});
		dispatch({
			type: SET_MSG,
			payload: {
				msg: res.data.message,
				type: 'success'
			}
		});
		setTimeout(() => {
			dispatch({ type: CLEAR_MSG })
		}, 5000)
	} catch (e) {
		console.log(e)
		const errObj = e.response.data;
		
		dispatch({
			type: SET_MSG,
			payload: {
				msg: errObj.error,
				type: 'error'
			}
		})

		setTimeout(() => {
			dispatch({ type: CLEAR_MSG })
		}, 5000)
	}
}

export const registerUser = userDetails => async (dispatch) => {
	try {
		const res = await axios.post(`${DEV_BASE_URL}/auth/signup`, userDetails);
		const storeUser = JSON.stringify(res.data);

		cookieStorage.setCookie('user', storeUser, 30);
		
		// history.replace('/#/email-verification');
		window.location.replace('/#/login');
		dispatch({
			type: REGISTER_SUCCESS,
			payload: {
				access_token: res.data.access_token,
				refresh_token: res.data.refresh_token,
				username: res.data.username
			}
		});
		dispatch({
			type: SET_MSG,
			payload: {
				msg: 'Registration was successful, login to continue.',
				type: 'success'
			}
		});

		setTimeout(() => {
			dispatch({ type: CLEAR_MSG })
		}, 5000)
	} catch (e) {
		const errObj = e.response.data;
		
		dispatch({
			type: SET_MSG,
			payload: {
				msg: errObj.error,
				type: 'error'
			}
		})

		setTimeout(() => {
			dispatch({ type: CLEAR_MSG })
		}, 5000)
	}
}
