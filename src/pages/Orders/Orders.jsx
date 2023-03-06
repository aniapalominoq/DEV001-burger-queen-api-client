import React from "react";

import style from "./Orders.module.css";

import Slider from "../../components/Slider";

const Orders = () => {
  return (
    <section className={style.orders}>
      <Slider />
    </section>
  );
};

export default Orders;
