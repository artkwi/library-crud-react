import React from 'react';

const Books = (props)  => (
    <div className="books-list-wrapper">
    <header className="books-list-header">
        <div>Name:</div>
        <div>Author:</div>
        <div>Actions:</div>
    </header>
    <section>
{
    showBooks(props)
}
    </section>
    </div>
);

const showBooks = (props) => {
    return (
        Object.keys(props.books).map( key => 
        <div className="books-list"> 
        <div> {(props.books == "") ? "" : props.books[key].name}</div>
        <div> {(props.books == "") ? "" : props.books[key].author}</div>
        <div> {(props.books == "") ? "" : "options"}</div>
        {/*<div> {(props.books == "") ? "" : props.books[key].description}</div> */}
        </div>
        )
    )
}
export default Books;