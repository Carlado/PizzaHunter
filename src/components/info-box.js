import React, {Component} from 'react';
import {connect} from 'react-redux';
import LocationMap from './google-map';
import CLIENT_ID from '../config';

class InfoBox extends Component {


  render() {
      const details = this.props.details[0].response.venue;
      //Remove http part of url for cleaner appearance
      const formattedUrl = details.url ? details.url.replace(/.*?:\/\//g, "") : "";
      const lat = details.location.lat;
      const lon = details.location.lng;
      return (
        <div className="col-md-4 info-box">
          <div className="map-area">
            <LocationMap lat={lat} lon={lon} markers={[{
              position: {
                lat: lat,
                lng: lon,
              },
              key: details.id,
              defaultAnimation: 2,
            }]}/>
          </div>
          <p>{details.location.formattedAddress[0]}</p>
          <p>{details.location.formattedAddress[1]}</p>
          {details.hours && <p>{details.hours.status}</p>}
          {details.contact.formattedPhone && <p>{details.contact.formattedPhone}</p>}
          {details.url && <p><a href={details.url} target="_blank">{formattedUrl}</a></p>}
          {details.contact.facebook && <p><a href={"https://www.facebook.com/profile.php?id=" + details.contact.facebook} target="_blank"><i className="fa facebook-icon fa-facebook-square" aria-hidden="true"></i>We're on Facebook!</a></p>}
          <p><a href={"https://foursquare.com/v/" + details.id} target="_blank"><i className="fa foursquare-icon fa-foursquare" aria-hidden="true"></i>View on Foursquare!</a></p>


        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    details: state.details
  }
}

export default connect(mapStateToProps)(InfoBox);
