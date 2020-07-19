import React from "react";
import Shoes from "../shoes.json";
import "../App.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <div className="product-container">
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <Link  className="hvr-grow products" key={keyName} to={`/product/${keyName}`}>
              <img className='products-shoe-image' alt="Shoe" src={shoe.img}  />
              <h3 className="shoe-name">{shoe.name}</h3>
              <h2 className="shoe-price"> {shoe.price} </h2>
            </Link>
          );
        })}
      </div>
      <div className="page-wrapper"></div>
    </div>
  );
}

export default Product;
