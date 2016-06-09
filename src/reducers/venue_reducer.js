import {GET_VENUES} from '../actions/index';


export default function venueReducer(state = [], action) {

  switch (action.type) {
    case GET_VENUES:
      console.log(action);
      return [action.payload.data, ...state];
  }

  return state;
}
