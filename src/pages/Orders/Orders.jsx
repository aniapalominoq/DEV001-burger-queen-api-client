import React from "react";
import Boards from "../../components/board/Boards";
import style from "./Orders.module.css";

import Slider from "../../components/Slider";

const Orders = () => {
  return (
    <section className={style.orders}>
      <Slider />
      <Boards />
    </section>
  );
};

export default Orders;
