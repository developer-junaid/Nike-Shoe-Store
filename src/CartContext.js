import React, { createContext, useState } from "react";

export const CartContext = createContext();

// Shipping Details context
export const ShippingContext = createContext();

export const CartProvider = (props) => {
  // Maintain Cart State
  const [cart, setCart] = useState([]);
  // Maintain Shipping state
  const [shippingState, setShippingState] = useState({});

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <ShippingContext.Provider value={[shippingState, setShippingState]}>
        {props.children}
      </ShippingContext.Provider>
    </CartContext.Provider>
  );
};
