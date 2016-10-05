import React from 'react';
import LocationMap from './google-map';


const InfoBox = (props) => {
  const details = props.details.response.venue;
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
      <p><i className="fa fa-home" aria-hidden="true"></i>{details.location.formattedAddress[0]}</p>
      {details.hours &&
        <p><i className="fa fa-clock-o" aria-hidden="true"></i>{details.hours.status}</p>}
      {details.contact.formattedPhone &&
        <p><i className="fa fa-phone" aria-hidden="true"></i>{details.contact.formattedPhone}</p>}
      {details.url &&
        <p><i className="fa fa-share" aria-hidden="true"></i><a href={details.url} target="_blank">{formattedUrl}</a></p>}
      {details.contact.facebook &&
        <p><a href={"https://www.facebook.com/profile.php?id=" + details.contact.facebook} target="_blank"><i className="fa facebook-icon fa-facebook-square" aria-hidden="true"></i>We're on Facebook!</a></p>}
      <p><a href={"https://foursquare.com/v/" + details.id} target="_blank"><i className="fa foursquare-icon fa-foursquare" aria-hidden="true"></i>View on Foursquare!</a></p>
      <p><a href={"https://www.google.com/maps/?q=" + lat + "," + lon} target="_blank"><i className="fa fa-google" aria-hidden="true"></i>View on Google Maps!</a></p>
    </div>
  );
}


export default InfoBox;
