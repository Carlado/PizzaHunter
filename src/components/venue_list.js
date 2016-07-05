import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {clearDetails} from '../actions/index';


class venueList extends Component {
  listVenues() {
    this.props.clearDetails();


    if (this.props.venues[0]) {
      const placeList = this.props.venues[0].response.groups[0].items;
      return placeList.map((place) => {
        let photo;
        if (place.venue.photos.count >= 1) {
          photo = place.venue.photos.groups[0].items[0].prefix +
          "200x200" +
          place.venue.photos.groups[0].items[0].suffix;
        } else {
          photo = "http://placehold.it/200x200";
        }



        return (
          <div className="col-md-6" key={place.venue.id}>
            <div className="col-md-12 venue-item">
              <div className="row">
                <div className="col-xs-8">
                  <Link to={'/venue/' + place.venue.id}><h6 className="venue-name">{place.venue.name}</h6></Link>
                  <div className="venue-rating"><span>{place.venue.rating}</span></div>
                  <div>
                    {place.venue.location.address}
                  </div>
                  <div className="tips-text">
                    {place.tips && <p>{place.tips[0].text}</p>}
                    {place.tips && <p>- {place.tips[0].user.firstName} {place.tips[0].user.lastName}</p>}
                  </div>
                </div>
                <div className="col-xs-4">
                  <img src={photo} alt="venue image" />
                </div>
              </div>
            </div>
          </div>
        )
      })
    }
  }

  render() {
    return(
      <div className="venues-page">
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
