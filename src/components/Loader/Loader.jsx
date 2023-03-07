import React from "react";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className="control">
      <img
        src="https://github.com/aniapalominoq/DEV001-burger-queen-api-client/blob/main/src/assets/loading.gif?raw=true"
        alt="loading"
      />
      <h1 className="title has-text-centered">
        <span className={style.loading}>Loading...</span>
      </h1>
    </div>
  );
};
export default Loader;
