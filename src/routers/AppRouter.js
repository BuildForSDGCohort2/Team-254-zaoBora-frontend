/**
* This file contains the routing setup for the site
*/


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// import PrivateRoute from './PrivateRoute';
// import MobileRoutes from './MobileRoutes';
// import ErrorBoundary from '../components/ErrorBoundary';
import Footer from '../components/Footer';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export const history = createBrowserHistory();

const AppRouter = () => (
    <BrowserRouter history={history}>
        <div className="App">
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;