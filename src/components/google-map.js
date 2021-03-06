import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import React, {Component} from 'react';

export default function LocationMap(props) {


  return (
    <GoogleMapLoader
      containerElement={
        <div style={{height: '100%'}}/>
      }
      googleMapElement={
        <GoogleMap defaultZoom={12} center={{lat: props.lat, lng: props.lon}}>
        {props.markers.map((marker, index) => {
            return (
              <Marker {...marker}/>
            );
          })}
        </GoogleMap>
      }
    />
  )
}
