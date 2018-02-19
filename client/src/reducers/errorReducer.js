import { ERROR_INFO, CLEAR_ERROR } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case ERROR_INFO:
      return { ...state, ...action.payload };
    case CLEAR_ERROR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
