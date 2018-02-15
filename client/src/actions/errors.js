import { ERROR_INFO, CLEAR_ERROR } from "./types";

export default function authError(error) {
  return dispatch => {
    dispatch({
      type: ERROR_INFO,
      payload: error
    });

    // to clear error alert in browser we clear errors after 4000ms
    setTimeout(() => {
      dispatch({
        type: CLEAR_ERROR,
        payload: { error: "" }
      });
    }, 6000);
  };
}
