/**
* This file contains the routing setup for the site
*/


import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// import PrivateRoute from './PrivateRoute';
// import MobileRoutes from './MobileRoutes';
// import ErrorBoundary from '../components/ErrorBoundary';
import Footer from '../components/Footer';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';

export const history = createBrowserHistory();

const AppRouter = () => (
    <HashRouter basename='/'> {/* syncs urls with pages on browser */}
        <div className="App">
	        <div>
	            <Switch>
	                <Route path="/" component={Dashboard} exact={true} />
	                <Route path="/login" component={Login} />
	                <Route path="/register" component={Register} />
	                <Route path="/about" component={About} />
	            </Switch>
		    	<Footer />
	        </div>
        </div>
    </HashRouter>
);

export default AppRouter;