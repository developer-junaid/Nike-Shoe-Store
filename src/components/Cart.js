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
    <div className="cart-container">
      <SummaryCard items={cart.length} amount={total} />
     
    </div>
  );
}

export default Cart;
