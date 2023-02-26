import React, { useEffect, useState } from "react";

const Slider = () => {
  //const [count, setCount] = useState(0);
  const [arrayProducts, setProducts] = useState([]);

  /*  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
  }; */
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="field  is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center">
      {/*  <div className="is-flex is-justify-content-center is-align-items-center ">
        <div className="control">
          <button className="button is-large">
            <span className="icon is-large">
              <i className="fa-solid fa-caret-left"></i>
            </span>
          </button>
        </div> */}
      {arrayProducts.map((product) => (
        <section
          className=" box my-3 mx-3 has-background-primary-light  is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
          key={product.id_product}
        >
          <figure className="image is-128x128 ">
            <img src={product.image_product} />
          </figure>

          <div className="control">
            <h2 className="title is-5 has-text-centered">
              {product.name_product}
            </h2>
            <h2 className="title is-4 has-text-centered">
              ${product.price_product}.00
            </h2>
          </div>
          {/* <div className="field has-addons has-addons-centered  px-3 ">
              <div className="control">
                <button
                  className="button is-primary is-large"
                  onClick={handleDecrease}
                >
                  <span className="icon is-medium">
                    <i className="fa-solid fa-minus"></i>
                  </span>
                </button>
              </div>
              <div className="control">
                <input
                  type="text"
                  className="input is-large"
                  defaultValue={count}
                />
              </div>
              <div className="control">
                <button
                  className="button is-primary is-large"
                  onClick={handleIncrease}
                >
                  <span className="icon is-large">
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="control has-text-grey-dark ">
              <button className="button is-link is-large ">
                <span className="icon is-large">
                  <i className="fa-sharp fa-solid fa-cart-plus"></i>
                </span>
                <span>add</span>
              </button>
            </div> */}
        </section>
      ))}

      {/* <div className="control">
          <button className="button is-large">
            <span className="icon is-large">
              <i className="fa-solid fa-caret-right"></i>
            </span>
          </button>
        </div>
      </div> */}
    </div>
  );
};
export default Slider;
