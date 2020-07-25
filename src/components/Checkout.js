import React, { useContext, useState } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { ShippingContext } from "../CartContext";
import { Link, useHistory } from "react-router-dom";

function Checkout() {
  // Create Shipping Context
  const [ShippingState, setShippingContext] = useContext(ShippingContext);

  let history = useHistory();
  // Use Form
  const { register, handleSubmit } = useForm();

  // Handle Submit
  const onSubmit = (data) => {
    const {
      first_name,
      last_name,
      address,
      email,
      city,
      state,
      country,
      zip_code,
    } = data;

    setShippingContext(data);
    history.push("/ordersummary");
  };

  // ...

  return (
    <div className="checkout-parent ">
      <div className="checkout-container">
        <h1>Checkout</h1>

        <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
          <br />
          <fieldset>
            <legend className="shipping-address">User Info</legend>
            <input
              type="text"
              name="first_name"
              ref={register}
              required
              placeholder="First Name"
            />
            &nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="last_name"
              ref={register}
              required
              placeholder="Last Name"
            />
            <input
              type="text"
              name="address"
              ref={register}
              required
              placeholder="Address"
            />
            <input
              type="email"
              name="email"
              ref={register}
              required
              placeholder="Email"
            />
            <input
              type="text"
              name="city"
              ref={register}
              required
              placeholder="City"
            />
            &nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="state"
              ref={register}
              required
              placeholder="State/Province/Region"
              size="100%    "
            />
            <br />
            <input
              type="number"
              name="zip_code"
              maxLength={5}
              size={5}
              max="99999"
              min="00001"
              ref={register}
              required
              placeholder="Zip Code"
            />
            &nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="country"
              ref={register}
              required
              placeholder="Country"
            />
            <br />
            <br />
            <FormControlLabel
              disabled
              control={<Checkbox checked name="payment_method" />}
              label="Payment is Cash on Delivery only"
            />
            <br />
            <Link to="/cart">
              <Button variant="contained" type="button" color="primary">
                Back
              </Button>
            </Link>
            <Button variant="contained" type="submit" color="primary">
              Submit and proceed
            </Button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
