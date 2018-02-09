import React, { Component } from "react";
import Header from "../Header/header";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
