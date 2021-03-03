import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "../../shoes.json";
import "../../App.css";
import { Link } from "react-router-dom";
import BackImage from "../../images/back.svg";

function ProductItems() {
  const { id } = useParams();
  const shoe = Shoes[id];

  //If shoe not found
  if (!shoe) {
    return <h2>Product Not Found !</h2>;
  }

  return (
    <div>
      <Link className="back-btn" to="/product">
        <img src={BackImage} alt="Go Back" height={30} title="back" />
      </Link>
      <div className="product-items">
        <h3 className="shoe-name">{shoe.name}</h3>
        <h2 className="shoe-price"> Price = {shoe.price} </h2>
        <img
          className="shoe-image"
          alt="Shoe"
          title={shoe.name}
          src={shoe.img2}
        />{" "}
      </div>
    </div>
  );
}

export default ProductItems;
