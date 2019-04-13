// Render Prop
import React from "react";
import { Formik, Form, Field } from "formik";
import Alert from "react-s-alert";

const AddBook = props => (
  <div>
    <h3>Add an book</h3>
    <Formik
      enableReinitialize
      initialValues={{ bookName: "", bookAuthor: "" }}
      onSubmit={(values, { setSubmitting }) => {

        setSubmitting(false);
        // add book request
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
        }).then(response => {
          props.getBookList();
          Alert.info("Book has been added!", {
            position: "top-right"
          });
          // reset initial values
          values.bookName = "";
          values.bookAuthor = "";
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field required type="text" name="bookName" placeholder="Book name" />
          <Field
            required
            type="text"
            name="bookAuthor"
            placeholder="Book author"
          />
          <button
            className="action-button"
            type="submit"
            disabled={isSubmitting}
          >
            Add
          </button>
        </Form>
      )}
    </Formik>
    <Alert stack={{ limit: 3 }} />
  </div>
);

export default AddBook;
