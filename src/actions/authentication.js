import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  UPDATE_USER_PROFILE,
  SUCCESS_UPDATE_MSG,
} from './types'

/*To do
*Connect register to API
*Connect login to API
*Connect backend and db :
*
*/

const url = "https://zaobora-back-ch-fix-end-etomax.herokuapp.com/api/v1"
// const history = useHistory();

/**
* Authentication Actions
*/

export const register = (user) => dispatch => {
    console.log('user')
    axios.post(`${url}/auth/signup`,user)
      .then(user => {
        dispatch({
          type: REGISTER_REQUEST,
          payload: user
        });
        dispatch(registerSuccess());
        useHistory.push('/login');
        console.log(user)
      })
      .catch (error => {
        dispatch(registerFailure(error.toString()));
        console.log(error)
      });
}


export const login = (email, password) => dispatch => {
    console.log('user')
    axios.get(`${url}/auth/login`,email, password)
      .then(user => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: user
        });
        dispatch(registerSuccess());
        useHistory.push('/');
        console.log(user)
      })
      .catch (error => {
        dispatch(registerFailure(error.toString()));
        console.log(error)
      });
}

export const updateProfile = (updates) => dispatch => {
  console.log(updates)
  axios.put(`${url}/profile/1`, updates)
    .then(user => {
      if(error){
        console.log(error)
      } else {
        console.log('Updated successfull')
        dispatch({
          type: UPDATE_USER_PROFILE,
          payload: updates
        })
        useHistory.push('/profile');
        dispatch(
            returnMessages('Details updated successfully', 200, SUCCESS_UPDATE_MSG)
        );
      }
    })
    .catch(error => {
      console.log(error)
    })
}

const registerRequest = () => ({
 type: REGISTER_REQUEST,
});

const registerSuccess = () => ({
 type: REGISTER_SUCCESS,
});

const registerFailure = () => ({
 type: REGISTER_FAILURE,
});

const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

const loginFailure = () => ({
  type: LOGIN_FAILURE,
});
