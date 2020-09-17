import React from 'react';
import 'normalize.css/normalize.css'; // reset css
import { Provider } from 'react-redux';
// import { ThroughProvider } from 'react-through'
import { CloudinaryContext } from 'cloudinary-react';

import './App.scss';
import AppRouter from './routers/AppRouter';
// import ErrorBoundary from './components/ErrorBoundary';
import configureStore from './store/configureStore';


const store = configureStore();
const cloudName = process.env.CLOUD_NAME;

class App extends React.Component {
    render() {
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
