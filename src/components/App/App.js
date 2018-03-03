import React, { Component } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar /> {/*Component*/}
          <div className="App-playlist">
            <SearchResults /> {/*Component*/}
            <Playlist /> {/*Component*/}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
