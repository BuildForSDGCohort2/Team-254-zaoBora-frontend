import { combineReducers } from 'redux'

import register from './register'
import login from './login'
import cart from './cart'

export default combineReducers({
  register,
  login,
  cart
})
