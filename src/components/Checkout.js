import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "../App.css";

function Checkout() {
  // Use Context
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((total, curr) => total + curr.price, 0);
  const total = Number(totalPrice).toFixed(2);

  // Condition
  if (cart.length === 0){
    return <h3>Oops.. Looks like you haven't bought anything !!</h3>
  }


  else{
    return (
        <div>
          <h3> Keep <strong>(${total})</strong> Ready, Parcel is on it's way !!</h3>
        </div>
      );
  }
 
}

export default Checkout;
