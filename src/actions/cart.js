import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEM_FROM_CART,
} from '../utils/Constants'

export const addItemToCart = (cartItems, cartItemToAdd) => dispatch => {
  const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
  );

  // dispatch({
  //   type: ADD_ITEM_TO_CART,
  //   payload: addItem
  // })

  if(!!existingCartItem){
      return cartItems.map(cartItem =>
          cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1}
          : cartItem
      );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => dispatch => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity -1 }
        : cartItem
    );
}

export const addItem = (item) => ({
    type: ADD_ITEM_TO_CART,
    payload: item,
});

export const removeItem = item => ({
    type: REMOVE_ITEM_FROM_CART,
    payload:item
});

export const clearItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
});
