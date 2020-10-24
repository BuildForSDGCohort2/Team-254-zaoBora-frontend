import axios from 'axios'
import {
  FETCH_ALL_PRODUCTS,
  FETCH_PRODUCT,
  BASE_URL
} from '../utils/Constants'

// fetch all products
export const fetchAllProducts = (products) => dispatch => {
  console.log('fetchAllProducts')
  axios.get(`${BASE_URL}/products`)
    .then(response => {
        const products = response.data.data;

        dispatch({
            type: FETCH_ALL_PRODUCTS,
            payload: products
        })
        localStorage.setItem('allProducts',JSON.stringify(products));

    })
    .catch(error => console.log(error))
}

// fetch one product
export const fetchProduct = (pid) => dipatch => {
  console.log('pid')
  axios.get(`${BASE_URL}/product/${pid}`)
    .then(response => {
      const product = response.data.data;

      const payload = {
        ...product,
      };

      localStorage.setItem('product', JSON.stringify(payload));
      dispatch({
        type: FETCH_PRODUCT,
        payload
      })
    })
    .catch(error => console.log(error))
}
