import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, isLogin, ...rest }) => {
    return isLogin ? (
        <Route path="/private" exact render={() => children} {...rest} />
    ) : (
            <Redirect to="/" />
        );
}

export default PrivateRoute;