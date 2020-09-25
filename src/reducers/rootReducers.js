import { combineReducers } from 'redux';
import register from './register'
import login from './login'
import cart from './cart'
import filters from './filters';
import products from './products';
import orders from './orders';
import resMsg from './resMsg';

export default combineReducers({
    products,
    filters,
    orders,
    register,
    login,
    cart,
    resMsg
});