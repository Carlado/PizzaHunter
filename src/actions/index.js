import axios from 'axios';
import config from '../config';

const ROOT_URL = 'https://api.foursquare.com/v2/venues/explore?query=pizza&v=20160608';
const CLIENT_ID = config.CLIENT_ID;
const CLIENT_SECRET = config.CLIENT_SECRET;

export const GET_VENUES = 'GET_VENUES';

export function getVenues(loc) {
  const request = axios.get(`${ROOT_URL}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&near=${loc}`);

  return {
    type: GET_VENUES,
    payload: request
  }
}
