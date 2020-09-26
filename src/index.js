import React from 'react';
import { render } from 'react-dom';

import App from './App';
import CookieStorage from './utils/CookieStorage';
import { fetchActiveUser } from './actions/authentication';
import configureStore from './store/configureStore';

const store = configureStore();


let hasRendered = false;
const cookieStorage = new CookieStorage();

const renderApp = () => {
    const user = cookieStorage.getCookie('user');
    const parsedUser = !user ? {} : JSON.parse(user);
    const authUser = !!parsedUser.access_token;
    const tokens = !!authUser ? {
        access_token: parsedUser.access_token,
        refresh_token: parsedUser.refresh_token
    } : {
        access_token: '',
        refresh_token: ''
    }
    console.log(parsedUser);
    store.dispatch(fetchActiveUser(tokens));

    if (!hasRendered) {
        	render(<App />, document.getElementById('root')
    	);
        hasRendered = true;
    }
}
renderApp();
