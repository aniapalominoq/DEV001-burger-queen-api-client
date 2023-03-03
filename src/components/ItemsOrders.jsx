import React, { useEffect } from "react";
import { useState } from "react";

const ItemsOrders = () => {
  const [count, setCount] = useState(0);
  


  return (
    <div className="box has-background-danger-light mx-4">
      <div className="field mx-4">
        <h1 className="has-text-centered title">
          Orders Already: <span>Table #1</span>
        </h1>
        <label className="label">Customer name:</label>
        <div className="control has-icons-left">
          <input
            className="input is-large"
            type="text"
            placeholder="Customer name"
          />
          <span className="icon is-medium is-left">
            <i className="fa-solid fa-user"></i>
          </span>
        </div>
      </div>
      <div className="control is-flex is-justify-content-space-around">
        <h2></h2>
        <div className="field has-addons">
          <button
            onClick={() => setCount(count - 1)}
            className="button is-6"
            type="button"
          >
            -
          </button>
          <p className="control">
            <input
              // value={count}
              className="input"
              type="text"
              placeholder="Find a post"
            />
          </p>
          <button
            onClick={() => setCount(count + 1)}
            className="button is-6"
            type="button"
          >
            +
          </button>
        </div>
        <span>Total</span>
        <button className="button is-6" type="button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ItemsOrders;
