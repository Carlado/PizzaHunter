import React, { Component } from 'react';
import SearchBar from './searchbar';
import VenueList from './venue_list';


export default class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 sidebar">
          <SearchBar />
          <VenueList />
        </div>
      </div>

    )
  }
}
