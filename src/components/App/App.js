import React, { Component } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Name1",
          artist: "Artist1",
          album: "Album1"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar /> {/*Component*/}
          <div className="App-playlist">
            <SearchResults SearchResults={this.state.searchResults} /> {/*Component*/}
            <Playlist /> {/*Component*/}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
