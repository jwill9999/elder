import { ERROR_INFO, CLEAR_ERROR } from "../actions/types";

export default function(state = [], action) {
  console.log("action ", action);
  switch (action.type) {
    case ERROR_INFO:
      return action.payload;
    case CLEAR_ERROR:
      return action.payload;
    default:
      return state;
  }
}
