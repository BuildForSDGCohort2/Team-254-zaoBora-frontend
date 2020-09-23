// Order actions
import {
  PLACE_ORDER,
  COMPLETE_ORDER,
  LOAD_CURRENT_ORDER,
  CANCEL_ORDER,
} from '../utils/Constants'

// import {
//   REMOVE_ITEM_FROM_CART,
//   CLEAR_ITEM_FROM_CART,
//   FETCH_CART_ITEMS
// } from './cart'

// place order
export const placeOrder = (item) => dispatch => {
  dispatch({
    type: PLACE_ORDER,
    payload: item
  })
};

export const completeOrder = (item) => dispatch => {
  dispatch({
    type: COMPLETE_ORDER,
    payload: item
  })
}

export const cancelOrder = (item) => dispatch => {
  dispatch({
    type: CANCEL_ORDER,
    payload: item
  })
}

export const loadCurrentOrder = (item) => dispatch => {
  dispatch({
    type: LOAD_CURRENT_ORDER,
    payload: item
  })
}
