import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "../App.css";
import SummaryCard from "./SummaryCard";

function Cart() {
  // Use Context
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((total, curr) => total + curr.price, 0);
  const total = Number(totalPrice).toFixed(2);

  return (
    <div>
      <SummaryCard items={cart.length} amount={total} />
      <hr/>
      <h3 className='your-products'>Your Products</h3>
      <div className="cart-container">
        {cart.map((item) => (
          <div className="cart-products">
            <h3 className="shoe-name">{item.name} </h3>
            <h2 className="shoe-price-cart"> ${item.price} </h2>
            <img className="cart-shoe-image" alt={item.name} src={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
