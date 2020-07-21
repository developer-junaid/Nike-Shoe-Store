import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartImage from "../images/cart1.svg";
import { CartContext } from "../CartContext";
import Tooltip from "@material-ui/core/Tooltip";

function Shoe({ shoe, keyName }) {
  // Use Context
  const [cart, setCart] = useContext(CartContext);

  // Add to cart
  const addToCart = () => {
    const item = { name: shoe.name, price: shoe.price, img: shoe.img };
    setCart((totalItems) => [...totalItems, item]);
  };

  return (
    <div className="hvr-grow products">
      <h3 className="shoe-name">{shoe.name} </h3>
      <h2 className="shoe-price"> ${shoe.price} </h2>
      <Link key={keyName} to={`/product/${keyName}`}>
        <img
          className="products-shoe-image"
          title={shoe.name}
          alt={shoe.name}
          src={shoe.img}
        />
      </Link>
      <br />
      <Tooltip title="Add to cart" aria-label="add to cart">
        <button onClick={addToCart} className="cart-button">
          <img className="cart-image" src={cartImage} alt="add to cart" />
        </button>
      </Tooltip>
    </div>
  );
}

export default Shoe;
