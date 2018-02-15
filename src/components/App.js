import React, { Component } from 'react';
import SearchBar from "../containers/SearchBar";

class App extends Component {
  render() {
    return (
      <div >
        <div className="container">
            <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
