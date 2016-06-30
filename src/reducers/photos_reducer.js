import {GET_PHOTOS} from '../actions/index';

export default function photosReducer(state = [], action) {
  switch (action.type) {
    case GET_PHOTOS:
      return [action.payload.data, ...state]
  }
  return state;
}
