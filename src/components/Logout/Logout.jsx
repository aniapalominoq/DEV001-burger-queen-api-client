    import React from 'react';
import { Link } from 'react-router-dom';
import { LOGOUT } from '../../config/routes/paths';
import { useAuthContext } from '../../Context/authContext';
  

    const Logout = () => { 
        const { isAuthenticated } = useAuthContext;
        const setcloset = () => {
            if(!isAuthenticated){
            localStorage.removeItem("users");
            }  
        }
        return (
            <div>
               <Link to={LOGOUT} className="button" onClick={setcloset}>LOGOUT</Link> 
            </div>
        );
    }
    
    export default Logout;
     
     