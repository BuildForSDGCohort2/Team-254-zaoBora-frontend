import { combineReducers } from 'redux';

import filters from './filters';
import products from './products';
import orders from './orders';

export default combineReducers({
    products,
    filters,
    orders
})