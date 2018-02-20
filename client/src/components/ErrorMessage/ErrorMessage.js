import React from "react";

const ErrorMessage = props => {
  const { errors } = props;
  console.log("errormessage", props.errors);
  if (errors.length === 0) {
    return null;
  }

  return (
    <div className="alert alert-danger" role="alert">
      <strong>{errors}</strong>
    </div>
  );
};

export default ErrorMessage;
