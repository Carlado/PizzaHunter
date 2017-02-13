import React, {Component} from 'react';
import VenueList from './venue_list';
import VenueLocation from './venue_location';
import NavBar from './navbar';

const Results = () => {
  return (
    <section className="results-page">
      <NavBar />
      <VenueLocation />
      <VenueList />
    </section>
  );
}

export default Results;
