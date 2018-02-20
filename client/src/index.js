import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

/*  ============================
          Redux Middleware
    ============================
*/
import thunk from "redux-thunk";

/*  ============================
          Redux Reducers
    ============================
*/
import reducers from "./reducers";

/*  ============================
          Component Imports
    ============================
*/
import App from "./components/App/App";
import Questions from "./containers/Questions/Questions";
import Home from "./components/home/home";
import ErrorPage from "./components/404/error";

/*  ============================
          Service Worker React
    ============================
*/
import registerServiceWorker from "./registerServiceWorker";

/*  ============================
          Main CSS Import
    ============================
*/
import "./index.css";

/*  ============================
       Redux Dev Tools Setup
    ============================
*/
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

/*  ============================
        Create Redux store
    ============================
*/

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, enhancers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/questions" component={Questions} />
        <Route path="/error" component={ErrorPage} />
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
