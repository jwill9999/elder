import axios from "axios";
import error from "./errors";
import { SEND_DATA } from "./types";

/*  =================================================================
              ***** SETTIMEROUT FOR LOADER DISPLAY ONLY ******
              Sends the results to Server for verification.
              Returns the results :-
              data: {
                        incorrectIndex: [],
                        totalQuestions: number,
                        totalIncorrect: number
                      }
    ===================================================================
*/

export default function sendData(data) {
  return dispatch => {
    axios
      .post("/api/results", { data })
      .then(res => {
        const payload = res.data.data;
        setTimeout(() => {
          dispatch({
            type: SEND_DATA,
            payload
          });
        }, 3000);
      })
      .catch(() => {
        setTimeout(() => {
          dispatch(error({ error: "Something failed getting your results!" }));
        }, 3000);
      });
  };
}
