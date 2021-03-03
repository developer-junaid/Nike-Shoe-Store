import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../../App.css";
import Button from "@material-ui/core/Button";

// Component
const PersonalInfoForm = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        //
        // Validate FirstName
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("required"),

        // Validate LastName
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("required"),

        // Validate Email
        email: Yup.string().email("Invalid email address").required("required"),
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
          {/* <label htmlFor="firstName">First Name </label> */}
          <Field name="firstName" type="text" placeholder="First Name" />
          <ErrorMessage name="firstName">
            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
          </ErrorMessage>
          <Field name="lastName" type="text" placeholder="Last Name" />
          <ErrorMessage name="lastName">
            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
          </ErrorMessage>
          <br />
          <Field
            name="email"
            type="text"
            placeholder="Email"
            style={{ width: "84%" }}
          />
          <ErrorMessage name="email">
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
          {/* <button type="submit"></button> */}
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInfoForm;
