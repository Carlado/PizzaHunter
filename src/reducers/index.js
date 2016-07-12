import { combineReducers } from 'redux';
import venuesReducer from './venues_reducer';
import detailReducer from './detail_reducer';
import photosReducer from './photos_reducer';

const rootReducer = combineReducers({
  venues: venuesReducer,
  details: detailReducer,
  photos: photosReducer
});

export default rootReducer;
