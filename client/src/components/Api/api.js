import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RiseLoader } from "react-spinners";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import fetchData from "../../actions/index";
import sendData from "../../actions/sendData";
import Header from "../Header/header";
import FormFields from "../FormFields/FormFields";
import Results from "../Results/Results";

import "./api.css";

class Api extends Component {
  componentDidMount() {
    if (this.props.data.length <= 0) {
      this.props.fetchData();
    }
  }
  // error message alert from server
  alertMessage() {
    if (this.props.message.error) {
      return (
        <div className="alert alert-danger" role="alert">
          <strong>{this.props.message.error}</strong>
        </div>
      );
    }
  }

  handleFormSubmit(e) {
    this.props.sendData(e);
  }

  render() {
    if (this.props.data.length === 0) {
      return (
        <div className="container ">
          <div className="mx-auto spinner">
            <RiseLoader color="#123abc" />
          </div>
        </div>
      );
    }

    if (this.props.data.length !== 0) {
      return (
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-10 text-center mx-auto mt-5 mb-5">
                {this.alertMessage()}

                <h1 id="headerText">Elder Questions and Answers</h1>
                <form
                  id="questionForm"
                  onSubmit={this.props.handleSubmit(
                    this.handleFormSubmit.bind(this)
                  )}
                >
                  <FormFields
                    data={this.props.data}
                    results={this.props.results}
                  />
                  {this.alertMessage()}
                  <Results results={this.props.results} />
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
