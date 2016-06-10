import { combineReducers } from 'redux';
import venueReducer from './venue_reducer';
import detailReducer from './detail_reducer';

const rootReducer = combineReducers({
  venues: venueReducer,
  details: detailReducer
});

export default rootReducer;
