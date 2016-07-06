import React, {Component} from 'react';
import {connect} from 'react-redux';
import LocationMap from './google-map';

class InfoBox extends Component {


  render() {
      const details = this.props.details[0].response.venue;
      //Remove http part of url for cleaner appearance
      const formattedUrl = details.url ? details.url.replace(/.*?:\/\//g, "") : "";
      const lat = details.location.lat;
      const lon = details.location.lng;
      return (
        <div className="col-md-4">
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
          {details.name && <p>{details.name}</p>}
          <p>{details.location.formattedAddress[0]}</p>
          <p>{details.location.formattedAddress[1]}</p>
          <p>{details.location.formattedAddress[2]}</p>
          {details.hours && <p>{details.hours.status}</p>}
          {details.contact.formattedPhone && <p>{details.contact.formattedPhone}</p>}
          {details.url && <p><a href={details.url} target="_blank">{formattedUrl}</a></p>}
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
