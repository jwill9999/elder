import axios from "axios";
import { push } from "react-router-redux";
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
        const payload = res.data;
        console.log("payload is .... ", res.data);
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
          dispatch(push("/error"));
        }, 3000);
      });
  };
}
