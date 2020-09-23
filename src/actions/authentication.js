import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE

} from '../utils/Constants'

/*To do
*Connect register to API
*Connect login to API
*Connect backend and db :
*
*/

/**
* Authentication Actions
*/

export const register = (user) => dispatch => {
    console.log('user')
    // axios.get('http://127.0.0.1:5000/users',user)
    //   .then(user => {
    //     // dispatch(registerSuccess());
    //     dispatch({
    //       type: REGISTER_REQUEST,
    //       payload: user
    //     });
    //     // useHistory.push('/login');
    //     // console.log(user)
    //   })
    //   .catch (error => {
    //     // dispatch(registerFailure(error.toString()));
    //     console.log(error)
    //   });
}


export const login = (email, password) => dispatch => {
    console.log('user')
    // axios.get('http://127.0.0.1:5000/users',email, password)
      // .then(user => {
      //   // dispatch(registerSuccess());
      //   dispatch({
      //     type: LOGIN_SUCCESS,
      //     payload: user
      //   });
      //   // useHistory.push('/login');
      //   // console.log(user)
      // })
      // .catch (error => {
      //   // dispatch(registerFailure(error.toString()));
      //   console.log(error)
      // });
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
})

const loginFailure = () => ({
  type: LOGIN_FAILURE,
})
