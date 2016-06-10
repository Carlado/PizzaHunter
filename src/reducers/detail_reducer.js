import {GET_DETAILS} from '../actions/index';

export default function detailReducer(state = [], action) {
  switch (action.type) {
    case GET_DETAILS:
      return [action.payload.data, ...state]
  }
  return state;
}
