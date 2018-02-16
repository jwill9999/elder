import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

// Middleware
import thunk from "redux-thunk";

// Reducers
import reducers from "./reducers";

// Component imports
import App from "./components/App/App";
import Api from "./components/Api/api";
import Home from "./components/home/home";
import ErrorPage from "./components/404/error";

// Service Worker React
import registerServiceWorker from "./registerServiceWorker";

// CSS imports
import "./index.css";

// redux dev tools setup
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Create store

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, enhancers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/questions" component={Api} />
        <Route path="/error" component={ErrorPage} />
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
