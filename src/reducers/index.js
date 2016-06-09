import { combineReducers } from 'redux';
import venueReducer from './venue_reducer';

const rootReducer = combineReducers({
  venues: venueReducer
});

export default rootReducer;
