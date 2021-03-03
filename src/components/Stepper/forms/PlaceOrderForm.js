import React, { useContext } from "react";
import { ShippingContext } from "../../../CartContext";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../../App.css";
import { useSelector } from "react-redux";
import { selectTotalAmount, selectProducts } from "../../../store";

// AddressForm
const PlaceOrderForm = ({ handleNext }) => {
  const products = useSelector(selectProducts);
  const cartProducts = products.filter((product) => product.added);
  let totalAmount = useSelector(selectTotalAmount);

  // Use Context
  const [ShippingState, setShippingState] = useContext(ShippingContext);

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
    <Formik
      initialValues={{}}
      onSubmit={(values) => {
        // To Give The Feel of an API
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >
      {({ errors, touched }) => (
        <Form className="place-order-parent" autoComplete="off">
          <div className="place-order-container">
            <h1>Order Summary</h1>
            <br />

            {/* Items */}

            {cartProducts.map((product, index) => {
              // Variables
              let id = product.id;
              let name = product.title;
              let price = product.price;
              let quantity = product.quantity;

              return (
                <div key={id} className="items-container">
                  <p className="left">
                    {index + 1}.&nbsp; {name}(
                    <span className="item-quantity">{quantity}</span>)
                  </p>

                  <p className="right">
                    <strong>${price}</strong>
                  </p>
                  <br />
                  <br />
                </div>
              );
            })}

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
              <Button
                variant="contained"
                className="checkout-btn"
                type="button"
                color="primary"
              >
                Back
              </Button>
            </Link>
            <Link to="/placeorder">
              <Button
                variant="contained"
                className="checkout-btn"
                type="button"
                color="primary"
              >
                Place Order
              </Button>
            </Link>
          </div>
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default PlaceOrderForm;
