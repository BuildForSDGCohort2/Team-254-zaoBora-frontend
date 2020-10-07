import axios from 'axios';

import {
	VENDOR_REGISTER_SUCCESS,
	VENDOR_LOGIN_SUCCESS,
	SET_MSG,
	BASE_URL,
	CLEAR_MSG,
	DEV_BASE_URL
} from '../utils/Constants';
import CookieStorage from '../utils/CookieStorage';


const cookieStorage = new CookieStorage();

export const registerVendor = venderDetails => async (dispatch) => {
	// try {
	// 	const res = await axios.post(`${BASE_URL}/auth/vendor/signup`, venderDetails);
	// 	const storeVendor = JSON.stringify({
	// 		...res.data,
	// 		account: 'vendor'
	// 	});

	// 	cookieStorage.setCookie('user', storeVendor, 30);

	// 	dispatch({
	// 		type: VENDOR_REGISTER_SUCCESS,
	// 		payload: {
	// 			access_token: res.data.access_token,
	// 			refresh_token: res.data.refresh_token,
	// 			username: res.data.username,
	// 			account: 'vendor'
	// 		}
	// 	});

	// 	dispatch({
	// 		type: SET_MSG,
	// 		payload: {
	// 			msg: 'Vendor registration was successful, please login to continue.',
	// 			type: 'success'
	// 		}
	// 	})

	// } catch (e) {
	// 	const errObj = e.response.data;

	// 	dispatch({
	// 		type: SET_MSG,
	// 		payload: {
	// 			msg: errObj.error,
	// 			type: 'error'
	// 		}
	// 	})

	// 	setTimeout(() => {
	// 		dispatch({ type: CLEAR_MSG })
	// 	}, 5000)
	// }
}

export const loginVendor = venderDetails => async (dispatch) => {
	// try {
	// 	console.log(loginVendor)
	// 	const res = await axios.get(`${BASE_URL}/auth/vendor/login`, venderDetails);
	// 	const authVendor = {
	// 		user: res.data.vendor,
	// 		authenticated: res.data.authenticated,
	// 		access_token: res.data.access_token,
	// 		refresh_token: res.data.refresh_token,
	// 		account: 'vendor'
	// 	}
	// 	console.log(authVendor)
	// 	const storeUser = JSON.stringify(authVendor);
		
	// 	cookieStorage.setCookie('user', storeUser, 30);
	// 	dispatch({
	// 		type: VENDOR_LOGIN_SUCCESS,
	// 		payload: authVendor
	// 	});
	// 	dispatch({
	// 		type: SET_MSG,
	// 		payload: {
	// 			msg: res.data.message,
	// 			type: 'success'
	// 		}
	// 	});
	// 	setTimeout(() => {
	// 		dispatch({ type: CLEAR_MSG })
	// 	}, 5000)

	// } catch (e) {
	// 	console.log(e)
	// 	const errObj = e.response.data;
	// 	console.log('error: ',errObj);

	// 	dispatch({
	// 		type: SET_MSG,
	// 		payload: {
	// 			msg: errObj.error,
	// 			type: 'error'
	// 		}
	// 	})

	// 	setTimeout(() => {
	// 		dispatch({ type: CLEAR_MSG })
	// 	}, 5000)
	// }
}
