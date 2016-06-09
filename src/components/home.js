import React, { Component } from 'react';
import ResultList from './resultlist';
import SearchBar from './searchbar';


export default class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 sidebar">
          <SearchBar />
        </div>
      </div>

    )
  }
}
