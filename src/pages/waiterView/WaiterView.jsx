import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/authContext";
import "./WaiterView.css";

const WaiterView = () => {
  const { isAuthenticated } = useAuthContext;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      localStorage.removeItem("users");
      isAuthenticated(false);
    }
  };
  return (
    <>
      <header className="header-waiterView">
        <button className="button btn-primary">
          <i class="fa-solid fa-bars"></i>
        </button>
        <span>
          <i class="fa-duotone fa-user-tie-hair"> </i>
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
      <input
        className="button"
        type="submit"
        value="Logout"
        onClick={handleSubmit}
      />
    </>
  );
};

export default WaiterView;
