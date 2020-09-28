import React from 'react';
import { render } from 'react-dom';

import App from './App';


let hasRendered = false;

const renderApp = () => {

    if (!hasRendered) {
        	render(<App />, document.getElementById('root')
    	);
        hasRendered = true;
    }
}
renderApp();
