import React from 'react';
import { useAuthContext } from '../../Context/authContext';

const WaiterView = () => {
    
    const {isAuthenticated} = useAuthContext; 
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!isAuthenticated){
            localStorage.removeItem("users");
            isAuthenticated(false);
        }
}
    return (
        <div>
            <h1>WELCOME WAITER</h1>
            <div className="btn-control">
                <input className="button" type="submit" value="Logout" onClick={handleSubmit} />
            </div>
        </div>

    );
}

export default WaiterView;
