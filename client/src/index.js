import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

// Middleware
import thunk from "redux-thunk";

// Reducers
import reducers from "./reducers";

// Component imports
import App from "./components/App/App";
import Api from "./components/Api/api";

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
      <div>
        <Route path="/" component={App} />
        <Route path="/questions" component={Api} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
