import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../../components/Logout/Logout";
import "./WaiterView.css";

const WaiterView = () => {
  const dateUser = JSON.parse(localStorage.getItem("users"));
  const [arrayTables, setArrayTables] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tables")
      .then((res) => res.json())
      .then((data) => setArrayTables(data));
  }, []);

  return (
    <>
      <header className="header-waiterView">
        <span className="icon-text">
          <span className="icon fa fas-2px is-large">
            <i className="fa-solid fa-burger fas fa-4x"></i>
          </span>
          <span className="title"></span>
        </span>

        <span className="field">
          <span className="title">{dateUser.user.name_user} </span>
        </span>
        <span>
          <i className="fa-duotone fa-user-tie-hair"> </i>
          <Logout />
        </span>
      </header>
      <h1 className="title is-1 has-text-centered">Tables</h1>

      <div className="field is-flex  is-flex-wrap-wrap is-justify-content-center  is-align-content-space-evenly">
        {arrayTables.map((elem) => (
          <Link
            to="/waiterView/orders"
            className="box m-4  has-background-light is-flex is-flex-direction-column is-justify-content-center"
            key={elem.id_table}
          >
            <span className="field is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
              <figure className="image is-128x128 is-flex is-justify-content-center ">
                <img src="https://img.icons8.com/ios-filled/250/restaurant-table.png" />
              </figure>

              <span className="title is-4"> Table N° {elem.number_table}</span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default WaiterView;
