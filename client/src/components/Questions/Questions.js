import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RiseLoader } from "react-spinners";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";

import fetchData from "../../actions/index";
import sendData from "../../actions/sendData";
import Header from "../Header/header";
import FormFields from "../FormFields/FormFields";
import Results from "../Results/Results";
import ErrorMessage from "../error/Error";

import "./questions.css";

class Questions extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  // error message alert from server
  messageAlert() {
    const { error } = this.props.errors;
    if (error) return <ErrorMessage errorMessage={this.props.errors} />;
  }

  handleFormSubmit(e) {
    this.props.sendData(e);
  }

  render() {
    const {
      totalIncorrect,
      totalQuestions,
      incorrectIndex
    } = this.props.results;

    const { data } = this.props;

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
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-10 text-center mx-auto mt-5 mb-5">
                <h1 id="headerText">Elder Questions and Answers</h1>
                {this.messageAlert()}
                <form
                  id="questionForm"
                  onSubmit={this.props.handleSubmit(
                    this.handleFormSubmit.bind(this)
                  )}
                >
                  <FormFields data={data} incorrectIndex={incorrectIndex} />

                  {this.messageAlert()}
                  <Results
                    totalIncorrect={totalIncorrect}
                    totalQuestions={totalQuestions}
                  />
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
        </div>
      );
    }
  }
}

Questions.defaultProps = {
  data: [],
  sendData: {},
  results: {},
  errors: {}
};

Questions.propTypes = {
  sendData: PropTypes.func,
  fetchData: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      choices: PropTypes.array
    })
  ),
  results: PropTypes.objectOf(
    PropTypes.shape({
      totalIncorrect: PropTypes.number,
      totalQuestions: PropTypes.number,
      incorrectIndex: PropTypes.array
    })
  ),
  errors: PropTypes.objectOf(PropTypes.string)
};

function mapStateToProps(state) {
  return {
    errors: state.error,
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
  })(Questions)
);
