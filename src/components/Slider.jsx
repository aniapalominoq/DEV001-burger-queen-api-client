import React, { useState } from "react";

const Slider = ({ name_product, image_product, price_product }) => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
  };

  return (
    <div className="is-flex is-justify-content-center is-align-items-center ">
      <div className="control">
        <button className="button is-large">
          <span className="icon is-large">
            <i class="fa-solid fa-caret-left"></i>
          </span>
        </button>
      </div>

      <section className=" my-3 mx-3 has-background-primary-light is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <figure class="image is-128x128 ">
          <img src="https://github.com/aniapalominoq/DEV001-burger-queen-api-client/blob/main/src/assets/imgMenu/cafeconleche.png?raw=true" />
        </figure>

        <div className="control">
          <h2 className="title is-5 has-text-centered">
            ham and cheese sandwich
          </h2>
          <h2 className="title is-4 has-text-centered">$ 7.00</h2>
        </div>
        <div className="field has-addons has-addons-centered  px-3 ">
          <div className="control">
            <button
              className="button is-primary is-large"
              onClick={handleDecrease}
            >
              <span className="icon is-medium">
                <i class="fa-solid fa-minus"></i>
              </span>
            </button>
          </div>
          <div className="control">
            <input type="text" className="input is-large" value={count} />
          </div>
          <div className="control">
            <button
              className="button is-primary is-large"
              onClick={handleIncrease}
            >
              <span className="icon is-large">
                <i class="fa-solid fa-plus"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="control has-text-grey-dark ">
          <button className="button is-link is-large ">
            <span className="icon is-large">
              <i class="fa-sharp fa-solid fa-cart-plus"></i>
            </span>
            <span>add</span>
          </button>
        </div>
      </section>

      <div className="control">
        <button className="button is-large">
          <span className="icon is-large">
            <i class="fa-solid fa-caret-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
};
export default Slider;
