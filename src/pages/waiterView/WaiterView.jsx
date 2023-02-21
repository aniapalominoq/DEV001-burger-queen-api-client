import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../components/Logout/Logout";
import PrivateRoute from "../../components/router/PrivateRoute";
import { useAuthContext } from "../../Context/authContext";
import "./WaiterView.css";

const WaiterView = () => {
  const dateUser = JSON.parse(localStorage.getItem("users"));
  //console.log(dateUser.user);

  return (
    <>
      <header className="header-waiterView">
        <span className="icon-text">
          <span className="icon  fa fas-2px is-large">
            <i className="fa-solid fa-burger fas fa-2x"></i>
          </span>
          <span className="title">{dateUser.user.role}</span>
        </span>

        <span className="fiel">
          <span className="title">{`${dateUser.user.firstname} ${dateUser.user.lastname}`}</span>
        </span>
        <span>
          <i className="fa-duotone fa-user-tie-hair"> </i>
          <Logout />
        </span>
      </header>
      <h1>Tables</h1>
      <div className="container-tables">
        hola
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
