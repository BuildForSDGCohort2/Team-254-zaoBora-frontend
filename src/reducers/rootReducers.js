import { combineReducers } from 'redux';
import authentication from './authentication'
import cart from './cart'
import filters from './filters';
import products from './products';
import orders from './orders';
import resMsg from './resMsg';

export default combineReducers({
    products,
    filters,
    orders,
    authentication,
    cart,
    resMsg
});