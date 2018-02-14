import axios from "axios";
import { FETCH_DATA, ERROR_INFO } from "./types";

export default function fetchData() {
  return dispatch => {
    axios
      .get("/api/data")
      .then(res => {
        const payload = res.data.api;
        setTimeout(() => {
          dispatch({
            type: FETCH_DATA,
            payload
          });
        }, 3000);
      })
      .catch(() => {
        setTimeout(() => {
          dispatch({
            type: ERROR_INFO,
            payload: `Unable to fetch data from the server`
          });
        }, 3000);
      });
  };
}
