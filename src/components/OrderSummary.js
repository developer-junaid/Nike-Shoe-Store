import React, { useContext } from "react";
import { ShippingContext, CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { selectTotalAmount } from "../store";

function OrderSummary() {
  let totalAmount = useSelector(selectTotalAmount);

  // Use Context
  const [ShippingState, setShippingState] = useContext(ShippingContext);
  const [cart, setCart] = useContext(CartContext);

  // Shipping state
  const {
    first_name,
    last_name,
    address,
    city,
    state,
    country,
    zip_code,
  } = ShippingState;
  return (
    <div className="place-order-parent">
      <div className="place-order-container">
        <h1>Order Summary</h1>
        <br />

        {/* Items */}

        {cart.map((item, idx) => (
          <div key={idx} className="items-container">
            <p className="left">
              {idx + 1}.&nbsp; {item.name}(
              <span className="item-quantity">{item.quantity}</span>)
            </p>

            <p className="right">
              <strong>${item.price}</strong>
            </p>
            <br />
            <br />
          </div>
        ))}

        {/* Delivery */}
        <>
          <br />
          <br />
          <p className="left">Delivery</p>

          <p className="right">
            <strong>Free</strong>
          </p>
          <br />
          <br />
        </>

        {/* Total */}

        <>
          <p className="left">Total</p>

          <p className="right">
            <strong>${totalAmount}</strong>
          </p>
          <br />
          <br />
        </>

        {/* Shipping Details */}

        <div className="shipping-container">
          <h2>( Shipping Details )</h2>
          <br />
          <p>
            {first_name} {last_name}
          </p>
          <br />
          <p>
            {address}, {city}, {state}, {zip_code}, {country}{" "}
          </p>
          <br />
          <p>Payment: "Cash On Delivery"</p>
          <br />
        </div>

        {/* Buttons */}
        <br />
        <br />
        <Link to="/checkout">
          <Button variant="contained" type="button" color="primary">
            Back
          </Button>
        </Link>
        <Link to="/placeorder">
          <Button variant="contained" type="button" color="primary">
            Place Order
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
