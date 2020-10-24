import React from 'react';
import 'normalize.css/normalize.css'; // reset css
import { Provider } from 'react-redux';
import { CloudinaryContext } from 'cloudinary-react';

import './App.scss';
import AppRouter from './routers/AppRouter';
import ErrorBoundary from './components/ErrorBoundary';
import configureStore from './store/configureStore';
import CookieStorage from './utils/CookieStorage';
import { fetchActiveUser } from './actions/authentication';


const cookieStorage = new CookieStorage();
const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState);
const cloudName = process.env.CLOUD_NAME;
const user = cookieStorage.getCookie('user');
const parsedUser = !user ? {} : JSON.parse(user);
const authUser = !!parsedUser?.access_token;
const tokens = authUser ? {
    access_token: parsedUser.access_token,
    refresh_token: parsedUser.refresh_token,
    account: 'user'
} : {
    access_token: '',
    refresh_token: '',
    account: 'user'
}

delete window.__PRELOADED_STATE__

class App extends React.Component {
    render() {
        if (authUser) {
            console.log('db user')
            store.dispatch(fetchActiveUser(tokens))
        }

        return (
            <Provider store={store}>
                <CloudinaryContext cloudName='zaobora'>
                    <ErrorBoundary>
                        <AppRouter />
                    </ErrorBoundary>
                </CloudinaryContext>
            </Provider>
        );
    }
}

export default App;
