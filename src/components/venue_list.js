import React, {Component} from 'react';
import {connect} from 'react-redux';


class venueList extends Component {
  listVenues() {
    if (this.props.venues[0]) {
      const placeList = this.props.venues[0].response.groups[0].items;
      return placeList.map((place) => {
        console.log(place);
        return (
          <li key={place.venue.id}>{place.venue.name} {place.venue.rating}</li>
        )
      })
    }
  }

  render() {
    return(
      <div>
        <ul>
          {this.listVenues()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    venues: state.venues
  }
}

export default connect(mapStateToProps)(venueList);
