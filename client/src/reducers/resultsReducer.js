import { SEND_DATA } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SEND_DATA:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
