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
	CHECK_AUTH_STATE
} from '../utils/Constants'
import CookieStorage from '../utils/CookieStorage';
import { forceRefreshToken } from '../utils/Common';
import {
	alertRegisterFail,
	alertRegisterSuccess,
	alertLoginFail,
	alertLoginSuccess,
	alertLogoutFail,
	alertLogoutSuccess,
	clearMsg
} from '../actions/resMsg';


const cookieStorage = new CookieStorage();

export const fetchActiveUser = ({ access_token, refresh_token, account }) => async (dispatch) => {
	const defaultPayload = {
		user: null,
		authenticated: false,
		access_token: "",
		refresh_token: ""
	}

	if (!access_token && !refresh_token) {
		return dispatch({
			type: CHECK_AUTH_STATE,
			payload: defaultPayload
		})
	}

	try {
		const headers = {
			'Authorization': `Bearer ${access_token}`
		}
		const res = await axios.get(`${BASE_URL}/${account}/active`, { headers });
		const payload = res.data;
		const jsonPayload = JSON.stringify(payload)
		cookieStorage.setCookie('user', jsonPayload, 1)

		dispatch({
			type: CHECK_AUTH_STATE,
			payload
		})
	} catch (e) {
		const error = e.response.data;
		console.log('----> ', e)
		console.log('--> ', e.response)
		console.log(error)

		switch (error.msg) {
			case 'Token has expired':
			case 'Token has been revoked':
				forceRefreshToken(refresh_token, fetchActiveUser)
				break;
			case 'Signature verification failed':
				cookieStorage.eraseCookie()
				dispatch({
					type: CHECK_AUTH_STATE,
					payload: defaultPayload
				})
				break;
			case 'User not found!':
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

export const registerUser = userDetails => async (dispatch) => {
	try {
		const res = await axios.post(`${BASE_URL}/auth/signup`, userDetails);
		const storeUser = JSON.stringify({
			...res.data,
			account: 'user'
		});

		cookieStorage.setCookie('user', storeUser, 30);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: {
				access_token: res.data.access_token,
				refresh_token: res.data.refresh_token,
				username: res.data.username,
				account: 'user'
			}
		});
		history.replace('/#/email-verification');
		// window.location.replace('/#/email-verification');
	} catch (e) {
		const errObj = e.response.data;

		dispatch(alertRegisterFail(errObj.error))

		setTimeout(() => {
			dispatch(clearMsg())
		}, 5000)
	}
}

export const loginUser = userDetails => async (dispatch) => {
	try {
		const res = await axios.post(`${BASE_URL}/auth/login`, userDetails);
		window.location.replace('/#/profile');
		const authUser = {
			user: res.data.user,
			authenticated: res.data.authenticated,
			access_token: res.data.access_token,
			refresh_token: res.data.refresh_token,
			account: 'user'
		}
		console.log(authUser)
		const storeUser = JSON.stringify(authUser);

		cookieStorage.setCookie('user', storeUser, 30);
		history.replace('/#/profile');
		dispatch({
			type: LOGIN_SUCCESS,
			payload: authUser
		});
		dispatch(alertLoginSuccess(res.data.message))
		setTimeout(() => {
			dispatch(clearMsg())
		}, 5000)
	} catch (e) {
		console.log(e)
		const res = e.response.data;
		console.log('error: ', res);
		
		dispatch(alertLoginFail(res.error))
		setTimeout(() => {
			dispatch(clearMsg())
		}, 5000)
	}
}

export const logoutUser = () => async (dispatch) => {
	try {
		const storedUser = cookieStorage.getCookie('user');
		const parsedUser = !storedUser ? {} : JSON.parse(storedUser);
		const userEmail = !!parsedUser?.user?.email ? parsedUser.user.email : 'no_email';
		fetchActiveUser({
			access_token: parsedUser.access_token,
			refresh_token: parsedUser.refresh_token,
			account: 'user'
		})
		const res = await axios.delete(`${BASE_URL}/auth/access_revoke/users/${userEmail}`, {
			headers: {
				'Authorization': `Bearer ${parsedUser.access_token}`
			}
		});
		cookieStorage.eraseCookie('user')
		dispatch({
			type: CHECK_AUTH_STATE,
			payload: {
				user: null,
				authenticated: false,
				access_token: "",
				refresh_token: ""
			}
		})
		history.replace('/#/');
		dispatch(alertLogoutSuccess(res.data.msg))
		setTimeout(() => {
			dispatch(clearMsg())
		}, 5000)
	} catch (e) {
		const res = e.response.data;
		console.log('error: ', res);
		
		/*
		Force auth token here
		*/
	}
}