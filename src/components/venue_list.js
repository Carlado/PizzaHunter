import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Loading from 'react-loading';



class venueList extends Component {
  listVenues() {
    const data = this.props.venues;

    if (data && data.meta.code === 200) {
      const placeList = data.response.groups[0].items;
      return placeList.map((place) => {
        let photo;
        if (place.venue.photos.count >= 1) {
          photo = place.venue.photos.groups[0].items[0].prefix +
          "200x200" +
          place.venue.photos.groups[0].items[0].suffix;
        } else {
          photo = "http://dummyimage.com/200x200/fff/026262.png&text=No+photos+from+this+place+yet";
        }

        return (
          <div className="col-md-6" key={place.venue.id}>
            <div className="col-md-12 venue-item">
              <div className="row">
                <div className="col-xs-7">
                  <Link to={'/venue/' + place.venue.id}><h6 className="venue-name">{place.venue.name}</h6></Link>
                  <div className="venue-rating">
                    {place.venue.rating ?
                      <span>{place.venue.rating}</span> :
                      <span>-</span>
                    }
                  </div>
                  <div>
                    {place.venue.location.address}
                  </div>
                  <div className="tips-text">
                    {place.tips && <p>"{place.tips[0].text}"</p>}
                  </div>
                </div>
                <div className="col-xs-5 image-box">
                  <img src={photo} alt="venue image" className="venue-image" />
                </div>
              </div>
            </div>
          </div>
        )
      })
    } else {
      return (
        <div className="loading-info">
          <p>Loading Pizza Places...</p>
          <p>Nothing loading? Try a new search in the field above</p>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="results-page">
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

export default connect(mapStateToProps)(venueList);
