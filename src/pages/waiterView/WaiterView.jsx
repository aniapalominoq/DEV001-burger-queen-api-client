import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../components/Logout/Logout";
import PrivateRoute from "../../components/router/PrivateRoute";
import { useAuthContext } from "../../Context/authContext";
import "./WaiterView.css";

const WaiterView = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthContext;
  // const navigate = useNavigate();
  // const handleSubmit = () => {
  //   if (!isAuthenticated) {
  //     localStorage.removeItem("users");
  //     navigate('/')
  //   }
  // };
  return (
    <>
      <header className="header-waiterView">
        <button className="button btn-primary">
          <i className="fa-solid fa-bars"></i>
        </button>
        <span>
          <i className="fa-duotone fa-user-tie-hair"> </i>
          <Logout />
        </span>
      </header>
      <h1>Tables</h1>
      <div className="container-tables">
        <Link to="" className="item-tables">
          <p className="title-tables">N° 1</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables">N° 2</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables">N° 3</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables">N° 4</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables">N° 5</p>
        </Link>
        <Link to="" className="item-tables">
          <p className="title-tables">N° 6</p>
        </Link>
      </div>
    </>
  );
};

export default WaiterView;
