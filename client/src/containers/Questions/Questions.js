import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RiseLoader } from "react-spinners";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";

import fetchData from "../../actions/index";
import sendData from "../../actions/sendData";
import Header from "../../components/Header/header";
import FormFields from "../../components/FormFields/FormFields";
import Results from "../../components/Results/Results";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import "./questions.css";

class Questions extends Component {
  componentDidMount() {
    this.props.fetchData();
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

    // if (data.length === 0 && this.props.errors.length === 0) {

    // }

    if (data.length !== 0 || this.props.errors.length !== 0) {
      return (
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-10 text-center mx-auto mt-5 mb-5">
                <h1 id="headerText">Elder Questions and Answers</h1>

                <form
                  id="questionForm"
                  onSubmit={this.props.handleSubmit(
                    this.handleFormSubmit.bind(this)
                  )}
                >
                  <FormFields data={data} incorrectIndex={incorrectIndex} />

                  <ErrorMessage errors={this.props.errors} />
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
    } // end
    return (
      <div className="container ">
        <div className="mx-auto spinner">
          <RiseLoader color="#123abc" />
        </div>
      </div>
    );
  }
}

Questions.defaultProps = {
  data: [],
  sendData: {},
  results: {},
  errors: []
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
  errors: PropTypes.arrayOf(PropTypes.string)
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
