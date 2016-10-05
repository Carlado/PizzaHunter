import React, {Component} from 'react';
import VenueList from './venue_list';
import VenueLocation from './venue_location';
import NavBar from './navbar';

const Results = () => {
  return (
    <div className="results-page">
      <NavBar />
      <VenueLocation />
      <VenueList />
    </div>
  );
}

export default Results;
