import {GET_VENUES} from '../actions/index';

export default function venuesReducer(state = null, action) {

  switch (action.type) {
    case GET_VENUES:
      return action.payload.data;

  }

  return state;
}
