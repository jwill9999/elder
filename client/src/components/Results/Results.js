import PropTypes from "prop-types";

import React from "react";

const Results = props => {
  const { totalQuestions, totalIncorrect } = props;
  if (totalQuestions === undefined) {
    return null;
  }
  return (
    <div className="alert alert-info" role="alert">
      <strong>
        You got {totalQuestions - totalIncorrect} questions right out of a total
        of {totalQuestions}
      </strong>
    </div>
  );
};

Results.defaultProps = {
  totalIncorrect: undefined,
  totalQuestions: undefined
};

Results.propTypes = {
  totalIncorrect: PropTypes.number,
  totalQuestions: PropTypes.number
};

export default Results;
