import { FETCH_DATA } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      console.log(action);
      return [...state, ...action.payload];

    default:
      return state;
  }
}
