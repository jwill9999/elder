import React, { Component } from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";

export default class FormFields extends Component {
  alertResults2(index) {
    const { incorrectIndex } = this.props;
    if (incorrectIndex !== undefined) {
      return incorrectIndex.map(i => {
        if (index === i) {
          return (
            <div
              key={incorrectIndex}
              className="alert alert-danger"
              role="alert"
            >
              <strong>Incorrect Answer Try Again</strong>
            </div>
          );
        }
        return <div />;
      });
    }

    return <div />;
  }

  render() {
    const { data } = this.props;
    return data.map((info, index) => (
      <div className="card m-5" key={info.title}>
        <div className="card-body">
          <h3>{info.title}</h3>
          <div>
            {info.choices.map(d => (
              <label
                htmlFor={info.title}
                className=" col-md-12 text-left mr-5"
                key={d}
              >
                <Field
                  className="m-2"
                  name={info.title}
                  component="input"
                  type="radio"
                  value={d}
                />
                {d}
              </label>
            ))}
            {this.alertResults2(index)}
          </div>
        </div>
      </div>
    ));
  }
}

FormFields.defaultProps = {
  incorrectIndex: undefined
};
FormFields.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      choices: PropTypes.array.isRequired
    })
  ).isRequired,
  incorrectIndex: PropTypes.arrayOf(PropTypes.number)
};
