import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Results extends Component {
  alertResults() {
    const { totalQuestions, totalIncorrect } = this.props;

    if (totalIncorrect !== undefined) {
      return (
        <div className="alert alert-info" role="alert">
          <strong>
            You got {totalQuestions - totalIncorrect} questions right out of a
            total of {totalQuestions}
          </strong>
        </div>
      );
    }
  }

  render() {
    return <div>{this.alertResults()}</div>;
  }
}

Results.defaultProps = {
  totalIncorrect: undefined,
  totalQuestions: undefined
};

Results.propTypes = {
  totalIncorrect: PropTypes.number,
  totalQuestions: PropTypes.number
};
