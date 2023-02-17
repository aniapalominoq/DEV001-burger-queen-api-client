    import React from 'react';
    // import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../../Context/authContext';
    import PrivateRoute from '../router/PrivateRoute';
import PublicRoute from '../router/PublicRoute';
    

    const Logout = () => { 
        // const navigate = useNavigate();
        const { isAuthenticated, setIsAuthenticated } = useAuthContext;
        // const [closet1, setcloset1 ] = useState()
        const setcloset = () => {
            if(!isAuthenticated){
                localStorage.removeItem("users")
               {<PrivateRoute/>}
               alert('bienvenido al home')
            }  
        }
        return (
            <div>
               <button className="button" onClick={setcloset}>LOGOUT</button> 
            </div>
        );
    }
    
    export default Logout;
     
     