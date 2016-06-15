import React, {Component} from 'react';
import VenueList from './venue_list';
import VenueLocation from './venue_location';
import NavBar from './navbar';

export default class Results extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <VenueLocation />
        <VenueList />
      </div>
    )
  }
}
