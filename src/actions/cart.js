import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEM_FROM_CART,
  FETCH_CART_ITEMS,
  UPDATE_CART_ITEMS,
  PURCHASE_CART_ITEM,
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

export const fetchItemsFromCart = (cartItems, item) => dispatch => {
    const cartItems = localStorage.getItem('cartItems');

    localStorage.setItem('cartItems', JSON.stringify(item))

    dispatch({
      type: FETCH_CART_ITEMS,
      payload: item
    });

    console.log(item)
}

export const purchaseCartItem = (item) => dispatch => {
  dispatch({
    type: PURCHASE_CART_ITEM,
    payload: item
  })
}

export const addItem = (item) => ({
    type: ADD_ITEM_TO_CART,
    payload: item,
});

export const removeItem = (item) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload:item
});

export const clearItemFromCart = (item) => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
});

export const fetchCartItems = (item) => ({
  type: FETCH_CART_ITEMS,
  payload: item
});

export const updateCartItem = (item) => ({
  type: UPDATE_CART_ITEMS,
  payload: item
});
