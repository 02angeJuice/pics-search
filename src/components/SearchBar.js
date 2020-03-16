import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = e => {
    return this.setState({ term: e.target.value.toUpperCase() });
  };

  onFormSubmit = e => {
    this.props.onSubmit(this.state.term);

    this.setState({
      term: ''
    });

    e.preventDefault();
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
