import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const EditBook = props => (
  <div>
    <h3>Edit book</h3>
    <Formik
      initialValues={{
        bookName: props.book.name,
        bookAuthor: props.book.author
      }}
      validate={values => {
        let errors = {};
        if (!values.bookName) {
          errors.bookName = "Required";
          errors.bookAuthor = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);

        fetch("http://localhost:3004/books/" + props.book.id, {
          method: "PATCH",
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
          <Field type="text" name="bookName" />
          <Field type="text" name="bookAuthor" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default EditBook;
