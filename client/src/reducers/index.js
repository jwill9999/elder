import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import dataReducer from "./dataReducer";
import errorReducer from "./errorReducer";
import resultsReducer from "./resultsReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  error: errorReducer,
  results: resultsReducer,
  form: formReducer
});

export default rootReducer;
