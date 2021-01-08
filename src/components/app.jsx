import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search';
import Gif from './gif';
import GifList from './gif-list';

const GIPHY_API_KEY = 'UMSlO0tTl75tAQ8B7LoIIRDR9pq0J9Kq';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

  selectGif = (id) => {
    this.setState({
      selectGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
