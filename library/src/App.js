import React, { Component, useState  } from 'react';
import Books from './Components/Books';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: []
    };
  }




  componentDidMount() {
    fetch("http://localhost:3004/books")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            books: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
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
          </div>
          <div className="books"> 
          <h2>Books:</h2>
          <Books books={this.state.books} removeBook={this.removeBook} editBook={this.editBook}/>
          </div>
        </main>
      </div>
    );
  }

removeBook = (book) => {
    console.log(book);
  }

editBook = (book) => {
  console.log(book);
}
}

export default App;
