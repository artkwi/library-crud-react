import React from 'react';

const Books = (props)  => (
    <div className="books-list-wrapper">
    <header className="books-list-header">
        <div>Name:</div>
        <div>Author:</div>
        <div>Description:</div>
    </header>
    <section>
        <div> {(props.books == "") ? "" : props.books[0].name}</div>
        <div> {(props.books == "") ? "" : props.books[0].author}</div>
        <div> {(props.books == "") ? "" : props.books[0].description}</div>
    </section>
    </div>
);

export default Books;