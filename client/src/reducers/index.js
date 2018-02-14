import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  form: formReducer
});

export default rootReducer;
