import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loader from "../../components/Loader/Loader";
import style from "./WaiterView.module.css";

const WaiterView = () => {
  const dateUser = JSON.parse(localStorage.getItem("users"));
  const [arrayTables, setArrayTables] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tables")
      .then((res) => res.json())
      .then((data) => setArrayTables(data));
  }, []);

  return (
    <section className={style.container}>
      <h1 className="title is-3 has-text-centered pt-4">Tables</h1>
      <div className="field is-flex  is-flex-wrap-wrap is-justify-content-center  is-align-content-space-evenly">
        {arrayTables.length === 0 ? (
          <Loader />
        ) : (
          arrayTables.map((elem) => (
            <Link
              to="/waiterView/orders"
              className="box m-6 p-4  has-background-success-light is-flex is-flex-direction-column is-justify-content-center"
              key={elem.id_table}
            >
              <span className="field is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
                <img
                  className={style.img}
                  src="https://img.icons8.com/ios-filled/250/restaurant-table.png"
                />

                <span className="title is-2 has-text-centered ">
                  N° {elem.number_table}
                </span>
              </span>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default WaiterView;
