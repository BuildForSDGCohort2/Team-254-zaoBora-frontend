import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {
	FETCH_ALL_PRODUCTS,
	FETCH_PRODUCT,
	BASE_URL,
	DEV_BASE_URL,
} from '../utils/Constants'


// fetch all products
export const fetchAllProducts = () => dispatch => {
	axios.get(`${BASE_URL}/products`)
		.then(response => {
			const products = response.data.data;

			dispatch({
				type: FETCH_ALL_PRODUCTS,
				payload: products
			})
			localStorage.setItem('allProducts', JSON.stringify(products));

		})
		.catch(error => console.log(error))
}

// fetch one product
export const fetchProduct = (pid) => dispatch => {
	axios.get(`${BASE_URL}/product/${pid}`)
		.then(response => {
			const product = response.data.data;

			const payload = {
				...product,
				pid
			};

			localStorage.setItem('product', JSON.stringify(payload));
			dispatch({
				type: FETCH_PRODUCT,
				payload
			})
		})
		.catch(error => console.log(error))
}
