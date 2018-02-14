import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RiseLoader } from "react-spinners";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import fetchData from "../../actions/index";

import "./api.css";

class Api extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  handleFormSubmit(e) {
    console.log(e);
  }

  render() {
    const { handleSubmit, data } = this.props;

    console.log(data);
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
          <div className="text-center mt-5 mb-5">
            <h1>Welcome to Elder Questions and Answers</h1>
          </div>
          <div>
            <form
              id="questionForm"
              onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
            >
              {this.props.data.map(info => (
                <div className="card m-5" key={info.title}>
                  <div className="card-body">
                    <label>{info.title}</label>
                    <div>
                      {info.choices.map(d => (
                        <label htmlFor={info.title} className="mr-5" key={d}>
                          <Field
                            name={info.title}
                            component="input"
                            type="radio"
                            value={d}
                          />
                          {d}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <button
                action="submit"
                className="btn btn-success btn-lg btn-block m-5"
              >
                Submit Your Answers
              </button>
            </form>
          </div>
        </div>
      );
    }
  }
}

Api.defaultProps = {
  data: []
};

Api.propTypes = {
  sendAnswers: PropTypes.func,
  fetchData: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      choices: PropTypes.array
    })
  )
};

function mapStateToProps(state) {
  return { data: state.data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchData
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: "questionForm"
  })(Api)
);
