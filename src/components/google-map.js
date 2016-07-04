import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import React, {Component} from 'react';

export default function LocationMap(props) {
  return (
    <GoogleMapLoader
      containerElement={
        <div style={{height: '100%'}}/>
      }
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
      }
    />
  )
}
