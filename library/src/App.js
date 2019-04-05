import React, { Component } from 'react';
import Books from './Components/Books';

class App extends Component {
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
          <div className="books-list"> 
          <h2>Books:</h2>
          <Books />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
