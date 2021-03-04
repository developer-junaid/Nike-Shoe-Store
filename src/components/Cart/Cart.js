import React, { useEffect } from "react";
import "../../App.css";
import SummaryCard from "../SummaryCard/SummaryCard";
import clearCartImage from "../../images/empty-cart.svg";
import crossImage from "../../images/cross3.svg";
import { useSelector } from "react-redux";
import {
  store,
  remove,
  emptyCart,
  selectProducts,
  selectTotalItems,
  setTotalItems,
  selectTotalAmount,
  setTotalAmount,
  incrementProduct,
  decrementProduct,
} from "../../store";

function Cart() {
  // const total = Number(totalPrice).toFixed(2);

  // Get total Items from store
  let totalItems = useSelector(selectTotalItems);
  // Get total Amount from store
  let totalAmount = useSelector(selectTotalAmount);
  // Get products from store
  const products = useSelector(selectProducts);
  // Filter Cart products
  const cartProducts = products.filter((product) => product.added);
  // Set total Items
  store.dispatch(setTotalItems(cartProducts.length));

  // Calculate Total Amount
  let sum = cartProducts
    .map((product) => {
      let price = product.price;
      let quantity = product.quantity;
      let total = price * quantity;
      return total;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  // Use Effect
  useEffect(() => {
    store.dispatch(setTotalAmount(Number(sum).toFixed(2)));
  }, [sum]);

  return (
    <div>
      <SummaryCard items={totalItems} amount={totalAmount} />
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

            // If Quantity is > 0
            if (quantity > 0) {
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
                  <button
                    className="item-button"
                    onClick={() => store.dispatch(decrementProduct(product))}
                  >
                    -
                  </button>
                  <input
                    readOnly
                    className="quantity"
                    maxLength="3"
                    type="text"
                    id="quantity"
                    value={quantity}
                  />
                  <button
                    className="item-button"
                    onClick={() => store.dispatch(incrementProduct(product))}
                  >
                    +
                  </button>
                  <br />
                  <img className="cart-shoe-image" alt={title} src={imageUrl} />
                  <br />
                </div>
              );
            } else {
              store.dispatch(remove(product));
              return null;
            }
          })}
      </div>
    </div>
  );
}

export default Cart;
