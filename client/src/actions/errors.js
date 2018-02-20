import { push } from "react-router-redux";
import { ERROR_INFO, CLEAR_ERROR } from "./types";

/*  =================================================================
             ************* ERROR action creator ***********
      Error message in view controlled by timer so it can be cleared
      to prevent it hanging in the display view. Clears after 6 seconds
    ===================================================================
*/

export default function authError(error) {
  console.log("error variable ", error);
  return dispatch => {
    dispatch({
      type: ERROR_INFO,
      payload: error
    });

    // to clear error alert in browser we clear errors after 4000ms
    setTimeout(() => {
      dispatch({
        type: CLEAR_ERROR,
        payload: []
      });
      dispatch(push("/"));
    }, 6000);
  };
}
