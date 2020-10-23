import React, { useState, useEffect } from 'react';
import { Link, Redirect, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loggedIn } from '../redux/actions/auth';
import './Login.css';

const Login = (props) => {
   const [logIn, setLogIn] = useState(false);
   const [status, setStatus] = useState("")
   const [formResponse, setFormRespone] = useState({});
   const { isLoggedIn, msg } = useSelector(
      (state) => state.auth
   );
   const dispatch = useDispatch();

   useEffect(() => {
      if (logIn) {
         dispatch(loggedIn(formResponse));
         setLogIn(false);
         setStatus(msg);
      }
   }, [logIn, dispatch, formResponse, msg]);

   useEffect(() => {
      if (msg) {
         setStatus(msg);
      }
   }, [msg])

   return (
      <>
         {
            isLoggedIn ? (
               <Switch>
                  <Redirect from="/login" to="/" exact />
               </Switch>
            ) : (
                  < div className="text-center mt-5" >
                     <form className="form-signin" onSubmit={(event) => {
                        event.preventDefault();
                        setLogIn(true);
                     }}>
                        <h1 className="h3 mb-3 font-weight-normal">LOGIN</h1>
                        <input
                           className="form-control"
                           placeholder="Username"
                           type="text"
                           id="username"
                           name="username"
                           onChange={(event) => {
                              const { name, value } = event.target;
                              setFormRespone({ ...formResponse, [name]: value })
                           }}
                           required autoFocus
                        />
                        <input
                           type="password"
                           className="form-control"
                           placeholder="Password"
                           id="password"
                           name="password"
                           onChange={(event) => {
                              const { name, value } = event.target;
                              setFormRespone({ ...formResponse, [name]: value })
                           }}
                           required />
                        <p className="text-danger">{status}</p>
                        <button
                           className="btn btn-lg btn-primary btn-block"
                           type="submit"
                        >Sign in</button>
                        <Link to="/register">
                           <button
                              className="btn btn-lg btn-light btn-block"

                           >Register</button>
                        </Link>
                     </form>
                  </div >
               )
         }

      </>
   );
}

export default Login;