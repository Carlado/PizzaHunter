require('es6-promise').polyfill();

import axios from 'axios';
import config from '../config';

const ROOT_URL = 'https://api.foursquare.com/v2/venues/explore?query=pizza&v=20160608&venuePhotos=1';
const VENUE_URL = 'https://api.foursquare.com/v2/venues/';
const CLIENT_ID = config.CLIENT_ID;
const CLIENT_SECRET = config.CLIENT_SECRET;

export const GET_VENUES = 'GET_VENUES';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_PHOTOS = 'GET_PHOTOS';


export function getVenues(loc) {
  const request = axios.get(`${ROOT_URL}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&near=${loc}`);
  return {
    type: GET_VENUES,
    payload: request
  }
}

export function getDetails(id) {
  const request = axios.get(`${VENUE_URL}${id}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20160608`);
  return {
    type: GET_DETAILS,
    payload: request
  }
}

export function getPhotos(id) {
  const request = axios.get(`${VENUE_URL}${id}/photos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20160608`);
  return {
    type: GET_PHOTOS,
    payload: request
  }
}
