import React from 'react';
import 'normalize.css/normalize.css'; // reset css
import { Provider } from 'react-redux';
// import { ThroughProvider } from 'react-through'
import { CloudinaryContext } from 'cloudinary-react';

import './App.scss';
import AppRouter from './routers/AppRouter';
// import ErrorBoundary from './components/ErrorBoundary';
import configureStore from './store/configureStore';
import CookieStorage from './utils/CookieStorage';
import { fetchActiveUser } from './actions/authentication';
import { CHECK_AUTH_STATE } from './utils/Constants';


const cookieStorage = new CookieStorage();
const store = configureStore();
const cloudName = process.env.CLOUD_NAME;
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

class App extends React.Component {
    render() {
        if (!authUser) {
            console.log('db user')
            store.dispatch(fetchActiveUser(tokens))
        } else {
            console.log('cookie user')
            store.dispatch({
                type: CHECK_AUTH_STATE,
                payload: parsedUser
            })
        }

        return (
            <Provider store={store}>
                <CloudinaryContext cloudName={cloudName}>
                    <AppRouter />
                </CloudinaryContext>
                {/*<ErrorBoundary>
                                    <AppRouter />
                                </ErrorBoundary>*/}
            </Provider>
        );
    }
}

export default App;
