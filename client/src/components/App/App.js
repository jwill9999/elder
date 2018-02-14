import React from "react";
import Header from "../Header/header";

import "./App.css";

const App = props => (
  <div className="container-fluid">
    <Header />
    {props.children}
  </div>
);

export default App;
