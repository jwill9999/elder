import React from "react";

const ErrorMessage = props => {
  const { errorMessage } = props;

  if (errorMessage.error !== undefined) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>{errorMessage.error}</strong>
      </div>
    );
  }
};

export default ErrorMessage;
