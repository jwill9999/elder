import React, { Component } from "react";
import "./api.css";

class Api extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/data");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-intro">{this.state.response}</h1>
      </div>
    );
  }
}

export default Api;
