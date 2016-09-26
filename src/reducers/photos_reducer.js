import {GET_PHOTOS} from '../actions/index';

export default function photosReducer(state = null, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return action.payload.data;
  }
  return state;
}
