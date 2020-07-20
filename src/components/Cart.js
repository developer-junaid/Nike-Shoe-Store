import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function Cart() {
  // Use Context
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((total, curr) => total + curr.price, 0);

  return (
    <div>
      <h2>Items in the cart : {cart.length}</h2>
      <h2>Total Price : {totalPrice}</h2>
    </div>
  );
}

export default Cart;
