import { SEND_DATA } from "../actions/types";

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case SEND_DATA:
      console.log("reducer ", action.payload);
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
