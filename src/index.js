import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import App from './App';
// import configureStore from './store/configureStore';


// const store = configureStore();
let hasRendered = false;

render(<div className="spinner-border text-warning"></div>, document.getElementById('root'));

const renderApp = () => {
    
    if (!hasRendered) {
        render(<App />, document.getElementById('root'));
        hasRendered = true;
    }
}
renderApp();
