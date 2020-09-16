import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE

} from './types'

/**
* Authentication Actions
*/

export const register = (user) => {
  return dispatch => {
    dispatch(registerRequest(user));
    console.log(user)
  //   axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
  //     .then(
  //       user => {
  //         dispatch(registerSuccess());
  //         useHistory.push('/login');
  //         console.log(user)
  //     })
  //     .catch (error => {
  //       dispatch(registerFailure(error.toString()));
  //       console.log(error)
  //     }
  //     );
   }

}

const registerRequest = () => ({
  type: REGISTER_REQUEST,
})

const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

const registerFailure = () => ({
  type: REGISTER_FAILURE,
})
