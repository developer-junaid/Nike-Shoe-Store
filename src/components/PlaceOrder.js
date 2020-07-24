import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function PlaceOrder() {
  // Use Context
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce(
    (total, curr, { quantity }) => total + curr.price * curr.quantity,
    0
  );
  const total = Number(totalPrice).toFixed(2);

  // Get Cart Total
  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  // Total
  const totalItems = getCartTotal();

  return (
    <div>
      <h1>Order Summary</h1>
      <div className="cart-container">
        {cart.map((item, idx) => (
          <div className="cart-products" key={idx}>
            <h3 className="cart-shoe-name">{item.name} </h3>
           
            <h2 className="shoe-price-cart"> ${item.price} </h2>
            <label htmlFor="quantity">Items</label>{" "}
            <input
              className="quantity"
              maxLength="3"
              type="number"
              id="quantity"
              value={item.quantity}
            />
            <br />
            <img className="cart-shoe-image" alt={item.name} src={item.img} />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaceOrder;
