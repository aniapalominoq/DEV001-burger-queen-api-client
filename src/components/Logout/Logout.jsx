    import React from 'react';
import { Link } from 'react-router-dom';
import { HOME, LOGOUT } from '../../config/routes/paths';
import { useAuthContext } from '../../Context/authContext';
import PrivateRoute from '../router/PrivateRoute';
  

    const Logout = () => { 
        const { isAuthenticated } = useAuthContext;
        const setcloset = () => {
            if(!isAuthenticated){ 
            localStorage.removeItem("users");
            location.reload();
            }  
        }
        return (
            <div>
               <Link to={LOGOUT} className="button" onClick={setcloset}>LOGOUT</Link> 
            </div>
        );
    }
    
    export default Logout;
     
     