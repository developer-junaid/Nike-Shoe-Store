import React from "react";
import Shoes from "../shoes.json";
import "../App.css";
import Shoe from "./Shoe";

function Product() {
  return (
    <div>
      <div className="product-container">
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return <Shoe shoe={shoe} keyName={keyName} />;
        })}
      </div>
      <div className="page-wrapper"></div>
    </div>
  );
}

export default Product;
