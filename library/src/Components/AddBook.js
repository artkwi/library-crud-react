// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Basic = () => (
  <div>
    <h3>Add an book</h3>
    <Formik
      initialValues={{ bookName: "", bookAuthor: "" }}
      validate={values => {
        let errors = {};
        if (!values.bookName) {
          errors.bookName = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);

          fetch("http://localhost:3004/books", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: values.bookName,
              author: values.bookAuthor
            })
          });
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="bookName" />
          <ErrorMessage name="email" component="div" />
          <Field type="text" name="bookAuthor" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
