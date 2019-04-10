import React, { Component, useState } from "react";
import Books from "./Components/Books";
import Basic from "./Components/AddBook";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: [],
      isEditable: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:3004/books")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            books: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      );
  }

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1>Library</h1>
        </header>
        <main>
          <div className="book-details">
            <h2>Book details</h2>
            <Basic />
          </div>
          <div className="books">
            <h2>Books:</h2>
            <Books
              books={this.state.books}
              removeBook={this.removeBook}
              editBook={this.editBook}
            />
          </div>
        </main>
      </div>
    );
  }

  removeBook = book => {
    // API delete request
    fetch("http://localhost:3004/books/" + this.state.books[book].id, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    console.log(this.state.books[book]);
    const books = [...this.state.books];
    books.splice(book, 1);
    this.setState({ books: books });
  };

  editBook = book => {
    console.log(book);
  };

  updateBooks;
}

export default App;
