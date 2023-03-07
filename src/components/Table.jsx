import React from "react";
import { useAuthContext } from "../Context/authContext";
import { useState } from "react";

const Table = () => {
  const { arrayContext, setArrayContext } = useAuthContext();
  const [count, setCount] = useState(0);
  console.log(arrayContext);

  const counter = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="columns has-background-primary is-3 is-narrow-tablet has-text-white is-flex is-centered">
        <div className="column is-offset-x mx-6">
          <h1>ORDERS</h1>
        </div>
        <div className="column  is-offset-x">
          <h2>TABLE:</h2>
        </div>
        <div className="column is-offset-x">
          {" "}
          <input
            className="input is-primary is-one-quarter is-medium"
            type="text"
            placeholder="Name Client"
          />
        </div>
      </div>
      <table className="table has-background-primary-light ">
        <thead>
          <tr>
            <th>
              <abbr title="Position">ID</abbr>
            </th>
            <th>DESCRIPTION</th>
            <th>
              <abbr title="Played">UNIT PRICE</abbr>
            </th>
            <th></th>
            <th>
              <abbr title="Won">QTY</abbr>
            </th>
            <th></th>
            <th>
              <abbr title="Drawn">TOTAL</abbr>
            </th>
            <th>
              <abbr title="Lost">ACTION</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          {arrayContext.map((element, index) => (
            <>
              <tr key={element.id_product}>
                <th>{index + 1}</th>
                <td>{element.name_product}</td>
                <td>$ {element.price_product}</td>
                <td>
                  <button
                    className="button is-primary is-normal"
                    onClick={() => setCount(count - 1)}
                  >
                    -
                  </button>
                </td>
                <td itemID={index}>{count}</td>
                <td>
                  <button
                    className="button is-primary is-normal"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </td>
                <td> ${element.price_product + element.price_product}</td>
                <td>
                  <button className="button is-primary is-normal">
                    DELETE
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      {arrayContext.length != 0 ? (
        <button className="button is-primary is-normal is-flex is-justify-content-center is-align-content-center">
          Send order
        </button>
      ) : null}
    </>
  );
};

export default Table;
