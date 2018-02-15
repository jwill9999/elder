import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RiseLoader } from "react-spinners";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import fetchData from "../../actions/index";
import sendData from "../../actions/sendData";

import "./api.css";

class Api extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  handleFormSubmit(e) {
    this.props.sendData(e);
  }

  // error message alert from server
  alertMessage() {
    const { error } = this.props.message;
    if (error) {
      return (
        <div className="alert alert-danger" role="alert">
          <strong>{this.props.message.error}</strong>
        </div>
      );
    }
  }

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

  alertResults2(index) {
    if (Object.keys(this.props.results).length > 0) {
      const arr = this.props.results.incorrectIndex;
      console.log("arr === ", arr);

      for (const i in arr) {
        if (index === arr[i]) {
          return (
            <div className="alert alert-danger" role="alert">
              <strong>Incorrect Answer Try Again</strong>
            </div>
          );
        }
      }
    }
  }

  render() {
    const { handleSubmit, data } = this.props;
    if (data.length === 0) {
      return (
        <div className="container ">
          <div className="mx-auto spinner">
            <RiseLoader color="#123abc" />
          </div>
        </div>
      );
    }

    if (data.length !== 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-10 text-center mx-auto mt-5 mb-5">
              {this.alertMessage()}
              {this.alertResults()}
              <h1 id="headerText">Elder Questions and Answers</h1>
              <form
                id="questionForm"
                onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
              >
                {this.props.data.map((info, index) => (
                  <div className="card m-5" key={info.title}>
                    <div className="card-body">
                      <label>{info.title}</label>
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
                ))}
                {this.alertMessage()}
                {this.alertResults()}

                <button
                  action="submit"
                  className="btn btn-success btn-lg btn-block  "
                >
                  Submit Your Answers
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

Api.defaultProps = {
  data: [],
  sendData: {}
};

Api.propTypes = {
  sendData: PropTypes.func,
  fetchData: PropTypes.func.isRequired,
  totalIncorrect: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      choices: PropTypes.array
    })
  )
};

function mapStateToProps(state) {
  console.log(state.results.totalIncorrect);
  return {
    message: state.error,
    data: state.data,
    results: state.results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchData,
      sendData
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: "questionForm"
  })(Api)
);
