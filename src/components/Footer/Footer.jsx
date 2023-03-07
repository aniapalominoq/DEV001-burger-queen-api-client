import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <strong>Copyright © 2023</strong>
      <span>
        <strong>Desarrollado por</strong>
      </span>
      <a href="https://github.com/aniapalominoq" target="_blank">
        Melania Palomino 🇵🇪
      </a>
      <a href="https://github.com/ErikaDUARTEm" target="_blank">
        Erika Duarte 🇨🇴
      </a>
    </footer>
  );
};
export default Footer;
