import {GET_DETAILS} from '../actions/index';

export default function detailReducer(state = null, action) {
  switch (action.type) {
    case GET_DETAILS:
      return action.payload.data;


  }
  return state;
}
