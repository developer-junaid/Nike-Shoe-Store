import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../../App.css";
import Button from "@material-ui/core/Button";

// AddressForm
const AddressForm = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{
        address: "",
        city: "",
        state: "",
        zipCode: 0,
        country: "",
      }}
      validationSchema={Yup.object({
        //
        // Validate address
        address: Yup.string()
          .max(40, "Must be 40 characters or less")
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
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >
      {({ errors, touched }) => (
        <Form className="checkout-form" autoComplete="off">
          <Field name="country" type="text" placeholder="Country" />
          <ErrorMessage name="country">
            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
          </ErrorMessage>
          <Field name="city" type="text" placeholder="City" />
          <ErrorMessage name="city">
            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
          </ErrorMessage>
          <Field name="state" type="text" placeholder="State/Province/Region" />
          <ErrorMessage name="state">
            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
          </ErrorMessage>
          <Field name="zipCode" type="text" placeholder="Zip Code" />
          <ErrorMessage name="zipCode">
            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
          </ErrorMessage>
          <br />
          <Field
            name="address"
            type="text"
            placeholder="Address"
            style={{ width: "84%" }}
          />
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
      )}
    </Formik>
  );
};

export default AddressForm;
