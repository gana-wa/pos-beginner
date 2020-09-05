import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registered } from '../redux/actions/auth';

const Register = (props) => {
   const [isRegistered, setRegistered] = useState(false);
   const [status, setStatus] = useState("");
   const [formResponse, setFormRespone] = useState({});
   const dispatch = useDispatch();
   const { msg } = useSelector(
      (state) => state.auth
   );

   useEffect(() => {
      if (isRegistered) {
         dispatch(registered(formResponse));
         setRegistered(false);
         setStatus(msg);
      }
   }, [isRegistered]);

   useEffect(() => {
      if (msg) {
         setStatus(msg);
      }
   }, [msg])

   return (
      < div className="text-center mt-5" >
         <form className="form-signin" onSubmit={(event) => {
            event.preventDefault();
            setRegistered(true);
         }}>
            <h1 className="h3 mb-3 font-weight-normal">REGISTER</h1>
            <input
               className="form-control"
               placeholder="Username"
               type="text"
               id="username"
               name="username"
               onChange={(event) => {
                  const { name, value } = event.target;
                  setFormRespone({ ...formResponse, [name]: value, level_id: 2 })
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
                  setFormRespone({ ...formResponse, [name]: value, level_id: 2 })
               }}
               required />
            <p className="text-danger">{status}</p>
            <button
               className="btn btn-lg btn-primary btn-block"
               type="submit"
            >Register</button>
            <Link to="/login">
               <button
                  className="btn btn-lg btn-light btn-block"
               >Already have an account..?</button>
            </Link>
         </form>
      </div >
   );
}

export default Register;