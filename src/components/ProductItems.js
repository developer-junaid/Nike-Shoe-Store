import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "../shoes.json";
import './../App.css';

function ProductItems() {
  const { id } = useParams();
  const shoe = Shoes[id];
  
  //If shoe not found
  if (!shoe){
    return <h2>Product Not Found !</h2>
  }

  return (
    <div>
      <div className="product-items">
      <h3 className="shoe-name">{shoe.name}</h3>
              <h2 className="shoe-price"> Price = {shoe.price} </h2>
             <a href={shoe.img2}> <img alt="Shoe" src={shoe.img2} height={500} /> </a>
      </div>
    </div>
  );
}

export default ProductItems;
