/**
* This file contains the routing setup for the site
*/


import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// import MobileRoutes from './MobileRoutes';
// import ErrorBoundary from '../components/ErrorBoundary';
import PrivateRoute from './PrivateRoute';
import Footer from '../components/Footer';
import ProductItemReviews from '../components/ProductItemReviews';
import AccountOrders from '../pages/AccountOrders';
import Account from '../pages/Account';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Market from '../pages/Market';
import ProductItem from '../pages/ProductItem';
import About from '../pages/About';
import Checkout from '../pages/Checkout';
import EmailVerification from '../pages/EmailVerification';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';
import FarmersDashboard from '../pages/farmer/FarmersDashboard';
import FarmersPosts from '../pages/farmer/FarmersPosts';
import FarmersOrders from '../pages/farmer/FarmersOrders';
import FarmerResetPassword from '../pages/farmer/FarmerResetPassword';
import FAQ from '../pages/FAQ';
import { EmailVerified } from '../pages/EmailVerified';


export const history = createBrowserHistory();

const AppRouter = () => (
    <HashRouter basename='/'> {/* syncs urls with pages on browser */}
        <div className="App">
	        <div>
	            <Switch>
	                <Route path="/" component={Market} exact={true} />
	                <Route path="/product/:id/description" component={ProductItem} exact={true} />
	                <Route path="/product/:id/reviews" component={ProductItemReviews} exact={true} />
	                <Route path="/login" component={Login} />
	                <Route path="/register" component={Register} />
	                <Route path="/about" component={About} />
	                <Route path="/email-verification" component={EmailVerification} />
	                <Route path="/email-verified" component={EmailVerified} />
	                <Route path="/faq" component={FAQ} />
	                <PrivateRoute path="/farmer/profile" component={FarmersDashboard} />
	                <PrivateRoute path="/farmer/posts" component={FarmersPosts} />
	                <PrivateRoute path="/farmer/orders" component={FarmersOrders} />
	                <PrivateRoute path="/farmer/reset-password" component={FarmerResetPassword} />
	                <PrivateRoute path="/orders" component={AccountOrders} />
	                <PrivateRoute path="/profile" component={Account} />
	                <PrivateRoute path="/checkout" component={Checkout} />
	                <PrivateRoute path="/cart" component={Cart} />
	                <Route component={NotFound} />
	            </Switch>
	        </div>
	        <Footer />
        </div>
    </HashRouter>
);

export default AppRouter;