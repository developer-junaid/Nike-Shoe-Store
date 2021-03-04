import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../../App.css";
import Button from "@material-ui/core/Button";
import { ShippingContext } from "../../../CartContext";

// AddressForm
const AddressForm = ({ handleNext }) => {
  const [ShippingState, setShippingContext] = useContext(ShippingContext);

  return (
    <Formik
      initialValues={{
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      }}
      validationSchema={Yup.object({
        //
        // Validate address
        address: Yup.string()
          .max(60, "Must be 60 characters or less")
          .required("required"),

        // Validate city
        city: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("required"),

        // Validate state
        state: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("required"),

        // Validate zipCode
        zipCode: Yup.string()
          .length(5)
          .max(99999, "Must be 99999 or less")
          .min(1, "Must be at least 00001")
          .required("required")
          .length(5),

        // Validate country
        country: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("required"),

        // //
      })}
      onSubmit={(values) => {
        // To Give The Feel of an API
        setTimeout(() => {
          // console.log(JSON.stringify(values, null, 2));
          setShippingContext({ ...ShippingState, ...values });
          handleNext();
        }, 400);
      }}
    >
      {({ errors, touched }) => (
        <div className="checkout-parent ">
          <div className="checkout-container">
            <h2>Address Info</h2>

            <Form className="checkout-form">
              <label htmlFor="country">Country </label>
              <Field name="country" type="text" />
              <ErrorMessage name="country">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />
              <label htmlFor="city">City </label>
              <Field name="city" type="text" />
              <ErrorMessage name="city">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />
              <label htmlFor="state">State/Province/Region </label>
              <Field name="state" type="text" />
              <ErrorMessage name="state">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />
              <label htmlFor="zipCode">Zip Code </label>
              <Field name="zipCode" type="number" />
              <ErrorMessage name="zipCode">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />
              <label htmlFor="address">Address </label>
              <Field name="address" type="text" />
              <ErrorMessage name="address">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />

              <Button
                variant="contained"
                className="checkout-btn"
                type="submit"
                color="primary"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AddressForm;
