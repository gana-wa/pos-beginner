import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import History from './pages/History';
import Login from './pages/Login';
import Register from './pages/Register';

const AppRouter = () => {
    return (
        <Router>
            <PrivateRoute>
                <Home />
                {/* <History /> */}
            </PrivateRoute>
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/history" component={History} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Router>
    )
}

export default AppRouter;