import React, { useEffect, useState } from "react";
import Loader from "./Loarder/Loader";

const Slider = () => {
  //const [count, setCount] = useState(1);
  const [arrayProducts, setArrayProducts] = useState([]);
  const [valueFilter, setValueFilter] = useState("breakfast");

  /*  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
  }; */
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setArrayProducts(data));
  }, []);

  const filterProducts = (value) => {
    arrayProducts.filter((product) => {
      if (product.category_product === value) return product;
    });
  };
  console.log(filterProducts);

  return (
    <>
      <div className="tabs is-toggle   is-centered is-toggle-rounded is-large mt-4 ">
        <ul>
          <li className="is-active">
            <a>
              <span className="icon is-small">
                <i className="fa-solid fa-mug-saucer"></i>
              </span>
              <span>Breakfast</span>
            </a>
          </li>

          <li>
            <a>
              <span className="icon is-small">
                <i className="fa-solid fa-burger"></i>
                <i className="fa-solid fa-bottle-droplet"></i>
              </span>
              <span>Lunch dinner</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="field  is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center">
        {arrayProducts.length === 0 ? (
          <>
            <div className="control">
              <img src="src\assets\loading.gif" alt="loading" />
              <h1 className="title has-text-centered ">Loading...</h1>
            </div>
          </>
        ) : (
          arrayProducts.map((product) => (
            <section
              className=" box  mx-3 has-background-primary-light  is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
              key={product.id_product}
            >
              <figure className="image is-128x128">
                <img src={product.image_product} height="150px" width="216px" />
              </figure>
              <div className="field">
                <div className="title is-5 has-text-centered">
                  {product.name_product}
                </div>
                <div className="title is-4 has-text-centered">
                  ${product.price_product}.00
                </div>
              </div>
              <div className="control  ">
                <button className="button is-primary is-normal">
                  <span className="icon is-medium">
                    <i className="fa-sharp fa-solid fa-cart-plus"></i>
                  </span>
                  <span>add</span>
                </button>
              </div>
            </section>
          ))
        )}
      </div>
    </>
  );
};
export default Slider;
