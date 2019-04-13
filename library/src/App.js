import React, { Component } from "react";
import Books from "./Components/Books";
import AddBook from "./Components/AddBook";
import EditBook from "./Components/EditBook";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: [],
      isEditable: false,
      currentBook: null
    };
  }

  componentDidMount() {
    this.getBookList();
  }

  getBookList = () => {
    this.setState({isEditable: false});
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
  };



  render() {
    return (
      <div className="wrapper">
        <header className="App-header">
          <h1 className="app-title">Library</h1>
        </header>
        <main>
          <button className="add-book-button" onClick={this.newBook} >New +</button>
          <div className="book-details">
            {this.state.isEditable ? (
              <EditBook getBookList={this.getBookList} book={this.state.books[this.state.currentBook]} />
            ) : (
              <AddBook getBookList={this.getBookList}/>
            )}
          </div>
          <div className="books">
            <h2>Book collection:</h2>
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
    const books = [...this.state.books];
    books.splice(book, 1);
    this.setState({ books: books });
  };

  editBook = book => {
    //console.log(book);
    this.setState({
      currentBook: book,
      isEditable: true
    });
    
    
  };

  newBook = () => {
    this.setState({
      isEditable: false
    });
  }
}

export default App;
