// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";



const AddBook = props => (
  <div>
    <h3>Add an book</h3>
    <Formik
      initialValues={{ bookName: "", bookAuthor: "" }}
      /*validate={values => {
        let errors = {};
        if (!values.bookName ) {
          errors.bookName = "Required";
        }
        if (!values.bookAuthor ) {
        errors.bookAuthor = "Required";
        }
        return errors;
      }}*/
      onSubmit={(values, { setSubmitting }) => {
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
        }).then(response => {
          props.getBookList();
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field required type="text" name="bookName" placeholder="Book name"/>
          <Field required type="text" name="bookAuthor" placeholder="Book author" />
          <button className="action-button" type="submit" disabled={isSubmitting}>
            Add
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default AddBook;
