import {GET_VENUES} from '../actions/index';

export default function venuesReducer(state = [], action) {

  switch (action.type) {
    case GET_VENUES:
      return [action.payload.data, ...state];
      
  }

  return state;
}
