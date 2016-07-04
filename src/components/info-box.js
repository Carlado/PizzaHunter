import React, {Component} from 'react';
import {connect} from 'react-redux';
import LocationMap from './google-map';

class InfoBox extends Component {


  render() {
      const details = this.props.details[0].response.venue;
      const formattedUrl = details.url.replace(/.*?:\/\//g, "");
      const lat = details.location.lat;
      const lon = details.location.lng;
      return (
        <div className="col-md-4">
          <LocationMap lat={lat} lon={lon}/>
          {details.name && <p>{details.name}</p>}
          <p>{details.location.formattedAddress[0]}</p>
          <p>{details.location.formattedAddress[1]}</p>
          <p>{details.location.formattedAddress[2]}</p>
          {details.hours.status && <p>{details.hours.status}</p>}
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
