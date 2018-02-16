import React, { Component } from 'react';
import SearchBar from "../containers/SearchBar";
import WeatherList from "../containers/WeatherList";

class App extends Component {
  render() {
    return (
      <div >
        <div className="container">
            <SearchBar />
            <WeatherList />
        </div>
      </div>
    );
  }
}

export default App;
