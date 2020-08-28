import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import History from './pages/History';

const AppRouter = () => {
    return (
        <Router>
            {/* <PrivateRoute>
                <History />
            </PrivateRoute> */}
            <Route path="/" exact component={Home} />
            <Route path="/history" component={History} />
        </Router>
    )
}

export default AppRouter;