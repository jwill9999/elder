import React, { Component } from "react";
import { Field } from "redux-form";

export default class extends Component {
  alertResults2(index) {
    if (Object.keys(this.props.results).length > 0) {
      return this.props.results.incorrectIndex.map(i => {
        if (index === i) {
          return (
            <div className="alert alert-danger" role="alert">
              <strong>Incorrect Answer Try Again</strong>
            </div>
          );
        }
      });
    }
  }
  render() {
    return this.props.data.map((info, index) => (
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
