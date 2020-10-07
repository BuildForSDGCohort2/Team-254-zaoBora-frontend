import React from 'react';
import { Link } from 'react-router-dom';

export const EmailVerified = () => (
    <React.Fragment>
        <h1>Email was successfully verified!</h1>
        <Link to="/login">Please click here to login</Link>
    </React.Fragment>
)