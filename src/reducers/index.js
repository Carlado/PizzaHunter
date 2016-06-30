import { combineReducers } from 'redux';
import venueReducer from './venue_reducer';
import detailReducer from './detail_reducer';
import photosReducer from './photos_reducer';

const rootReducer = combineReducers({
  venues: venueReducer,
  details: detailReducer,
  photos: photosReducer
});

export default rootReducer;
