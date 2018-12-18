import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";

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

import Questions from "./containers/Questions/Questions";
import Home from "./components/home/home";
import ErrorPage from "./containers/404/error";

/*  =======================================
      Create a history of your choosing 
      (we're using a browser history in 
      this case)
    =======================================
*/
const history = createHistory();

/*  =======================================
      Build the middleware for intercepting 
      and dispatching navigation actions
    =======================================
*/

const middleware = routerMiddleware(history);

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

const createStoreWithMiddleware = applyMiddleware(thunk, middleware)(
  createStore
);
const store = createStoreWithMiddleware(reducers, enhancers);

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/error" component={ErrorPage} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
