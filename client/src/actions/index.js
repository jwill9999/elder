import axios from "axios";
import { FETCH_DATA, ERROR_INFO } from "./types";

/*  =================================================================              
              GETS the Questions from the server.
              Returns the Questions :-
              [{  title: string,
                  choices: [strings]                        
              }]
    ===================================================================
*/

export default function fetchData() {
  return (dispatch, getState) => {
    if (getState().data.length > 0) {
      return;
    }
    axios
      .get("/api/data")
      .then(res => {
        const payload = res.data.api;
        console.log("payload is ", payload);
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
