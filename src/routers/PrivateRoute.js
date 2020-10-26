import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { alertLoginFail, clearMsg } from '../actions/resMsg';


const PrivateRoute = ({
    isAuthenticated,
    alertLoginFail,
    clearMsg,
    component: Component,
    ...rest
}) => {
    useEffect(() => {
        alertLoginFail('Please login to continue')
		setTimeout(() => {
			clearMsg()
		}, 5000)
    })

    return (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Component {...props} />
                ) : (
                    <React.Fragment>
                        <Redirect to="/login" />
                    </React.Fragment>
                )
            )} />
    );
}
const mapStateToProps = state => ({
    isAuthenticated: state.authentication.authenticated
});

const mapDispatchToProps = (dispatch) => ({
    alertLoginFail: (msg) => dispatch(alertLoginFail(msg)),
    clearMsg: (msg) => dispatch(clearMsg())
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
