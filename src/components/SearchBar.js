import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '', header: '' };

  componentDidMount() {
    this.setState({ header: 'ANIMAL' });
  }

  onInputChange = e => {
    return this.setState({ term: e.target.value.toUpperCase() });
  };

  onFormSubmit = e => {
    this.props.onSubmit(this.state.term);

    this.setState({
      header: this.state.term,
      term: ''
    });

    e.preventDefault();
  };

  render() {
    return (
      <div className="search-bar">
        <div className="ui fixed menu">
          <div className="item">
            <i className="orange star large icon"></i>
          </div>
          <a className="item" href="#top">
            {this.state.header}
          </a>

          <div className="ui category search item right">
            <div className="ui transparent icon input">
              <form
                className="ui transparent icon input"
                onSubmit={this.onFormSubmit}
              >
                <input
                  className="prompt"
                  type="text"
                  onChange={this.onInputChange}
                  value={this.state.term}
                />

                <i className="search link icon"></i>
              </form>
            </div>
            <div className="results"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
