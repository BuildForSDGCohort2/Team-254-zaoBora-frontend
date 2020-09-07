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
import AccountOrders from '../pages/AccountOrders';
import Account from '../pages/Account';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Market from '../pages/Market';
import About from '../pages/About';
import Checkout from '../pages/Checkout';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';

export const history = createBrowserHistory();

const AppRouter = () => (
    <HashRouter basename='/'> {/* syncs urls with pages on browser */}
        <div className="App">
	        <div>
	            <Switch>
	                <Route path="/" component={Market} exact={true} />
	                <Route path="/login" component={Login} />
	                <Route path="/register" component={Register} />
	                <Route path="/about" component={About} />
	                <Route path="/checkout" component={Checkout} />
	                <Route path="/orders" component={AccountOrders} />
	                <Route path="/profile" component={Account} />
	                <Route path="/cart" component={Cart} />
	                <Route component={NotFound} />
	            </Switch>
	        </div>
	        <Footer />
        </div>
    </HashRouter>
);

export default AppRouter;