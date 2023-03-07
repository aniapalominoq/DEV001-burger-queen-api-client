import React from "react";
import Logout from "../Logout/Logout";
import style from "./Header.module.css";

const Header = () => {
  const readLocalStorage = JSON.parse(localStorage.getItem("users"));

  return (
    <header className={style.Header}>
      <nav className={style.Nav}>
        <div className="icon-text is-flex is-align-content-center is-justify-content-center px-6  ">
          <span className="icon fa fas-2px  has-text-light">
            <i className="fa-solid fa-burger fas fa-4x"></i>
          </span>
          <span className="icon mx-6">
            <strong className="has-text-light is-size-4">burger queen</strong>
          </span>
        </div>
        {readLocalStorage ? (
          <div className=" is-flex p-4 is-align-items-end is-4">
            <div className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center  ">
              <img
                className={style.avatar}
                src={readLocalStorage.user.image_user}
              />
              <span>
                <strong className="is-size-6">
                  {readLocalStorage.user.name_user}
                </strong>
              </span>
              <span className="tag has-background-warning ">Waiter</span>
            </div>
            <div className="dropdown is-right  is-active">
              <div className="dropdown-trigger">
                <button
                  className="button is-large is-danger"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu2"
                >
                  <span className="icon is-large">
                    <i className="fas fa-angle-down"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                  <div className="dropdown-item">
                    <hr className="dropdown-divider" />
                    <a className="dropdown-item">{<Logout />}</a>
                    <hr className="dropdown-divider" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
};
export default Header;
