
/**
* Authentication Actions
*/

import axios from 'axios'
import { history } from '../routers/AppRouter';
import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	BASE_URL,
	SET_MSG
} from '../utils/Constants'
import CookieStorage from '../utils/CookieStorage';


const cookieStorage = new CookieStorage();

export const login = (details) => async (dispatch) => {
	try {
		const res = await axios.post(`${BASE_URL}/auth/login`, details);
		window.location.replace('/#/profile');
		const storeUser = JSON.stringify(res.data);

		cookieStorage.setCookie('user', storeUser, 30);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: {
				access_token: res.data.access_token,
				refresh_token: res.data.refresh_token
			}
		});
		dispatch({
			type: SET_MSG,
			payload: res.data.message
		});
	} catch (e) {
		const errObj = e.response.data;
		
		dispatch({
			type: SET_MSG,
			payload: errObj.error
		})
	}
}

export const registerUser = (userObj) => async (dispatch) => {
	try {
		const res = await axios.post(`${BASE_URL}/auth/signup`, userObj);
		const storeUser = JSON.stringify(res.data);

		cookieStorage.setCookie('user', storeUser, 30);
		
		// window.location.replace('/#/email-verification');
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
			payload: "Registration was successful, login to continue."
		});
	} catch (e) {
		const errObj = e.response.data;
		
		dispatch({
			type: SET_MSG,
			payload: errObj.error
		})
	}
}
