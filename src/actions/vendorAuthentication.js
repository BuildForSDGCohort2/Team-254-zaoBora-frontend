import axios from 'axios';

import {
  VENDOR_REGISTER_SUCCESS,
  VENDOR_REGISTER_FAILURE,
  VENDOR_LOGIN_SUCCESS,
  SET_MSG,
  BASE_URL
} from '../utils/Constants'


export const registerVendor = venderDetails => async (dispatch) => {
  try {
    console.log(registerVendor)
    const res = await axios.post(`${BASE_URL}/auth/vendor/signup`, venderDetails);

      dispatch({
        type: VENDOR_REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MSG,
        payload: {
          msg: 'Registration was successful, login to continue.',
          type: 'success'
        }
      })

  } catch (e) {
      const errMsg = e.response.data;

      dispatch({
        type: SET_MSG,
        payload: errMsg
      })
  }
}

export const loginVendor = venderDetails => async (dispatch) => {
  try {
    console.log(loginVendor)
    const res = await axios.get(`${BASE_URL}/auth/vendor/login`, venderDetails);
    const vendorUser = {
      email: res.data.email,
      password: res.data.password
    }
    console.log(venderUser)
      dispatch({
        type: VENDOR_LOGIN_SUCCESS,
        payload: venderUser
      });

      dispatch({
        type: SET_MSG,
        payload: {
          msg: 'Login successful',
          type: 'success'
        }
      })

  } catch (e) {
    console.log(e)
    const errMsg = e.response.data;

    dispatch({
      type: SET_MSG,
      payload: {
        msg: errMsg.error,
        type: 'error'
      }
    })
  }
}
