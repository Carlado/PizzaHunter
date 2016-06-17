import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {clearDetails} from '../actions/index';


class venueList extends Component {
  listVenues() {
    this.props.clearDetails();
    if (this.props.venues[0]) {
      console.log(this.props.venues);
      const placeList = this.props.venues[0].response.groups[0].items;
      return placeList.map((place) => {
        return (
          <div className="col-md-4" key={place.venue.id}>
            <div className="col-md-12 venue-item">
              <Link to={'/venue/' + place.venue.id}><h6 className="venue-name">{place.venue.name}</h6></Link>
              <div className="venue-rating"><span>{place.venue.rating}</span></div>
              <div>
                {place.venue.location.address}
              </div>
            </div>
          </div>
        )
      })
    }
  }

  render() {
    return(
      <div>
        <div className="row">
          {this.listVenues()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    venues: state.venues
  }
}

export default connect(mapStateToProps, {clearDetails})(venueList);
