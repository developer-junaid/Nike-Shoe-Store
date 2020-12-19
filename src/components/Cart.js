import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "../App.css";
import SummaryCard from "./SummaryCard";
import clearCartImage from "../images/empty-cart.svg";
import crossImage from "../images/cross3.svg";
import { useSelector } from "react-redux";
import { store, remove } from "../store";

import "./cart.css";

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

  // Get products from store
  const products = useSelector((state) => state);

  return (
    <div>
      <SummaryCard items={totalItems} amount={total} />

      {/* Empty Cart button */}
      {products.length > 0 && (
        <div>
          {" "}
          <button
            className="clear-cart-button"
            // onClick={() => clearCart()}  -Empty Cart
          >
            <img
              className="clear-cart-image"
              src={clearCartImage}
              alt="Empty Cart"
              title="Empty Cart"
            />{" "}
          </button>
          <h3 className="your-products">Your Products</h3>
        </div>
      )}

      {/* Get Products */}
      <div className="cart-container">
        {products
          .filter((product) => product.added)
          .map((product) => {
            // variables
            let id = product.id;
            let title = product.title;
            let imageUrl = product.imageUrl;
            let price = product.price;
            let quantity = product.quantity;
            let totalPrice = price * quantity;

            return (
              <div key={id} className="cart-products">
                <h3 className="cart-shoe-name">{title} </h3>
                <button
                  className="remove-btn hvr-grow"
                  onClick={() => store.dispatch(remove(product))}
                >
                  {" "}
                  <img
                    src={crossImage}
                    height={30}
                    alt="Remove"
                    title="Remove"
                  />{" "}
                </button>
                <br />
                <h2 className="shoe-price-cart"> ${price} </h2>
                <label htmlFor="quantity">Items</label>{" "}
                <input
                  className="quantity"
                  maxLength="3"
                  type="number"
                  id="quantity"
                  value={quantity}
                  // onChange={(e) => setQuantity(item, parseInt(e.target.value))} - Change Quantity
                />
                <br />
                <img className="cart-shoe-image" alt={title} src={imageUrl} />
                <br />
              </div>
            );
          })}
      </div>
    </div>

    // <div>
    //   <SummaryCard items={totalItems} amount={total} />
    //   {/* Condition */}
    //   {cart.length > 0 && (
    //    <div> <button className="clear-cart-button" onClick={() => clearCart()}>
    //       {" "}
    //       <img
    //         className="clear-cart-image"
    //         src={clearCartImage}
    //         alt="Empty Cart"
    //         title="Empty Cart"
    //       />{" "}
    //     </button>
    //     <h3 className="your-products">Your Products</h3>
    //     </div>
    //   )}

    //   <div className="cart-container">
    //     {cart.map((item, idx) => (
    //       <div className="cart-products" key={idx}>
    //         <h3 className="cart-shoe-name">{item.name} </h3>
    //         <button
    //           className="remove-btn hvr-grow"
    //           onClick={() => removeProduct(item)}
    //         >
    //           {" "}
    //           <img
    //             src={crossImage}
    //             height={30}
    //             alt="Remove"
    //             title="Remove"
    //           />{" "}
    //         </button>
    //         <br />
    //         <h2 className="shoe-price-cart"> ${item.price} </h2>
    //         <label htmlFor="quantity">Items</label>{" "}
    //         <input
    //           className="quantity"
    //           maxLength="3"
    //           type="number"
    //           id="quantity"
    //           value={item.quantity}
    //           onChange={(e) => setQuantity(item, parseInt(e.target.value))}
    //         />
    //         <br />
    //         <img className="cart-shoe-image" alt={item.name} src={item.img} />
    //         <br />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default Cart;
