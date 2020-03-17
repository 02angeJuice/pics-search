import React, { Component } from 'react';
import './App.css';

import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  state = { images: [] };

  componentDidMount = async () => {
    const res = await unsplash.get('/search/photos', {
      params: { query: 'animal', per_page: 36 }
    });

    this.setState({ images: res.data.results });
  };

  onSearchSubmit = async term => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term, per_page: 36 }
    });

    this.setState({
      images: res.data.results
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
