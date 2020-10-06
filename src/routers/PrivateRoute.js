import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { setMsg } from '../actions/resMsg';
import { SET_MSG } from '../utils/Constants'


const PrivateRoute = ({
    isAuthenticated,
    setMsg,
    component: Component,
    ...rest
}) => {
    useEffect(() => {
        setMsg({
            type: SET_MSG,
            payload: {
                msg: "Please login to continue",
                type: 'error'
            }
        })
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
    isAuthenticated: state.authentication.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
    setMsg: (msg) => dispatch(setMsg(msg))
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);