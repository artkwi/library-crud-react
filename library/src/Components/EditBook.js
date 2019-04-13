import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.book
    };
  }

  // This line invokes in order to edit another book
  componentWillReceiveProps(nextProps) {
    if (nextProps.book !== this.state.book) {
      this.setState({ book: nextProps.book });
    }
  }

  render() {
    return (
      <div>
        <h3>Edit book</h3>
        <Formik enableReinitialize
          initialValues={{
            bookName: this.state.book.name,
            bookAuthor: this.state.book.author
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

            fetch("http://localhost:3004/books/" + this.state.book.id, {
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
              this.props.getBookList();
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field required type="text" name="bookName" />
              <Field required type="text" name="bookAuthor" />
              <button
                className="action-button"
                type="submit"
                disabled={isSubmitting}
                
              >
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default EditBook;
