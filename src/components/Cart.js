import React from "react";
import "../App.css";
import SummaryCard from "./SummaryCard";
import clearCartImage from "../images/empty-cart.svg";
import crossImage from "../images/cross3.svg";
import { useSelector } from "react-redux";
import {
  store,
  remove,
  emptyCart,
  selectProducts,
  selectTotalItems,
  setTotalItems,
} from "../store";

import "./cart.css";

function Cart() {
  // const total = Number(totalPrice).toFixed(2);

  // Get total Items from store
  let totalItems = useSelector(selectTotalItems);
  // Get products from store
  const products = useSelector(selectProducts);
  // Filter Cart products
  const cartProducts = products.filter((product) => product.added);
  // total Items
  store.dispatch(setTotalItems(cartProducts.length));

  return (
    <div>
      <SummaryCard items={totalItems} amount={5} />
      {/* Empty Cart button */}
      {cartProducts.length > 0 && (
        <div>
          {" "}
          <button
            className="clear-cart-button"
            onClick={() => store.dispatch(emptyCart(products))}
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
  );
}

export default Cart;
