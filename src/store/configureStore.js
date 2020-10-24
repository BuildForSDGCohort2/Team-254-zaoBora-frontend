/**
 * Store creation
 */

import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from '../reducers/rootReducers';


const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (preloadedState) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
        	applyMiddleware(...middleWare)
    	)
    );
    return store;
};
