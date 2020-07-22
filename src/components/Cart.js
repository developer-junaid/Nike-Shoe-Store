import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "../App.css";
import SummaryCard from "./SummaryCard";

function Cart() {
  // Use Context
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce(
    (total, curr, { quantity }) => total + curr.price * curr.quantity,
    0
  );
  const total = Number(totalPrice).toFixed(2);

  // Function Remove product
  function removeProduct(productToRemove) {
    setCart(cart.filter((product) => product !== productToRemove));
  }

  // Function Clear Cart
  function clearCart() {
    setCart([]);
  }

  // Get Cart Total
  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  // Set Quantity
  function setQuantity(product, amount) {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  }

  // Total
  const totalItems = getCartTotal();
  return (
    <div>
      <SummaryCard items={totalItems} amount={total} />
      {/* Condition */}
      {cart.length > 0 && (
        <button className='clear-cart-button' onClick={() => clearCart()}> Clear Cart </button>
      )}
      <hr />
      <h3 className="your-products">Your Products</h3>
      <div className="cart-container">
        {cart.map((item, idx) => (
          <div className="cart-products" key={idx}>
            <h3 className="cart-shoe-name">{item.name} </h3>
            <button className='remove-btn' onClick={() => removeProduct(item)}>X</button>

            <h2 className="shoe-price-cart"> ${item.price} </h2>
            <label htmlFor="quantity">Items</label>{" "}
            <input
              className="quantity"
              maxLength="3"
              type="number"
              id="quantity"
              value={item.quantity}
              onChange={(e) => setQuantity(item, parseInt(e.target.value))}
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

export default Cart;
