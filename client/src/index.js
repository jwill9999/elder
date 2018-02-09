import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import API from "./components/Api/api";

import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/api" component={API} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
