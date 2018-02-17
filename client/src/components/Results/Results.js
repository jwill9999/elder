import React, { Component } from "react";

export default class Results extends Component {
  alertResults() {
    const { totalQuestions, totalIncorrect } = this.props.results;
    if (Object.keys(this.props.results).length > 0) {
      return (
        <div className="alert alert-info" role="alert">
          <strong>
            You got {totalQuestions - totalIncorrect} questions right out of a
            total of {this.props.results.totalQuestions}
          </strong>
        </div>
      );
    }
  }

  render() {
    return <div>{this.alertResults()}</div>;
  }
}
