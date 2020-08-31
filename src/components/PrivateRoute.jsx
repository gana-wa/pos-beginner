import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, isLoggedIn, ...rest }) => {
    const auth = useSelector((state) => state.auth)
    return auth.isLoggedIn ? (
        <Route
            path="/" exact
            render={() => children}
            {...rest} />
    ) : (
            <Redirect to="/login" />
        );
}

export default PrivateRoute;