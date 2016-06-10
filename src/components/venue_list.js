import React, {Component} from 'react';
import {connect} from 'react-redux';


class venueList extends Component {
  listVenues() {
    if (this.props.venues[0]) {
      console.log(this.props.venues);
      const placeList = this.props.venues[0].response.groups[0].items;
      return placeList.map((place) => {
        return (
          <li key={place.venue.id}><h6>{place.venue.name}</h6>
          {place.venue.rating}
          <div>
            {place.venue.location.address}
          </div>
          </li>
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
