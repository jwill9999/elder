import axios from "axios";
import error from "./errors";
import { FETCH_DATA } from "./types";

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
          dispatch(error("Something Failed getting your Questions !"));
        }, 3000);
      });
  };
}
