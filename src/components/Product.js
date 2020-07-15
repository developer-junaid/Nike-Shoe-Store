import React from "react";
import Shoes from "../shoes.json";
import "../App.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1>Products</h1>
      <div className="product-container">
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <Link className="products" key={keyName} to={`/product/${keyName}`}>
              <img alt="Shoe" src={shoe.img} height={250} />
              <h3 className="shoe-name">{shoe.name}</h3>
              <h2 className="shoe-price"> {shoe.price} </h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
