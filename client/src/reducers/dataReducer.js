import { FETCH_DATA } from "../actions/types";

export default function(state = [], action) {
  // console.log("state", state);
  // console.log("action", action);
  switch (action.type) {
    case FETCH_DATA:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
